import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useWeightsContext } from '../hooks/useWeightsContext';
import { useAuthContext } from '../hooks/useAuthContext';
import styled from 'styled-components';
import { CgCloseR } from 'react-icons/cg';
import toast from 'react-hot-toast';
import { useStateContext } from '../lib/context';
import { log } from '../helper';
// import { motion } from 'framer-motion';

const WeightForm = ({ isFormActive, setIsFormActive }) => {
	const { dispatch } = useWeightsContext();
	const { user } = useAuthContext();

	const { unitMode } = useStateContext();

	// const navigate = useNavigate();

	// const [newWeight, setNewWeight] = useState('');
	const [load, setLoad] = useState('');
	// const [reps, setReps] = useState('');
	const [error, setError] = useState(null);
	const [emptyFields, setEmptyFields] = useState([]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!user) {
			setError('You must be logged in');
			return;
		}

		let loadConvertedToKilograms;

		// check user unit input and convert to kilos if needed
		switch (unitMode) {
			case 'kilograms':
				// code block
				loadConvertedToKilograms = { load };
				break;
			case 'stones':
				// code block
				const stoneToKiloConversion = 6.35;
				// const stonesInput = { load };
				const stonesInput = load;
				log(stonesInput, 'stones input');
				const convertedFromStones = (
					stonesInput * stoneToKiloConversion
				).toFixed(2);
				loadConvertedToKilograms = { load: convertedFromStones };
				// loadConvertedToKilograms = stonesInput * stoneToKiloConversion;
				break;
			case 'pounds':
				// code block
				const poundsToKiloConversion = 0.453592;
				const poundsInput = load;
				const convertedFromPounds = (
					poundsInput * poundsToKiloConversion
				).toFixed(2);
				loadConvertedToKilograms = { load: convertedFromPounds };
				break;
			default:
				// code block
				loadConvertedToKilograms = { load };
		}

		log(loadConvertedToKilograms, 'load converted');

		const weight = loadConvertedToKilograms;
		// const weight = { load };

		log(weight, 'weight from load');

		const response = await fetch(
			`${process.env.REACT_APP_BACKEND_URL}/api/weights`,
			{
				method: 'POST',
				body: JSON.stringify(weight),
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${user.token}`,
				},
			}
		);
		const json = await response.json();

		if (!response.ok) {
			setError(json.error);
			setEmptyFields(json.emptyFields);
		}
		if (response.ok) {
			setLoad('');
			setError(null);
			setEmptyFields([]);
			dispatch({ type: 'CREATE_WEIGHT', payload: json });
		}
		setIsFormActive(!isFormActive);
		notify(weight.load);
	};
	const handleClose = () => {
		// navigate('/home');
		setIsFormActive(!isFormActive);
	};

	// create a toast
	const notify = (weight) => {
		toast.success(`current weight of ${weight} kgs has been added.`, {
			// toast.success(`${headline_band} gig successfully added.`, {
			duration: 3000,
			style: {
				border: '2px solid #1da000',
			},
		});
	};

	return (
		<StyledForm
			className='create'
			onSubmit={handleSubmit}
			// initial={{ height: 0 }}
			// 			animate={{ height: '80%' }}
		>
			<h3>
				Add current Weight
				<CgCloseR className='close-icon' onClick={handleClose} />
			</h3>

			<div className='input-wrapper'>
				<label>
					Weight <span>({unitMode})</span>
				</label>
				{/* <label>Weight (in kg):</label> */}
				<input
					type='number'
					id='input-number'
					onChange={(e) => setLoad(e.target.value)}
					value={load}
					className={emptyFields.includes('load') ? 'error' : ''}
					autoFocus
				/>
			</div>

			<button>Add Weight</button>
			{error && <div className='error'>{error}</div>}
		</StyledForm>
	);
};
const StyledForm = styled.form`
	color: ${({ theme }) => theme.txtGrey};
	background: ${({ theme }) => theme.white};
	border-radius: 4px;
	/* margin: 0 auto 10px auto; */
	padding: 1rem 2rem 2rem 2rem;
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
	display: flex;
	flex-direction: column;
	justify-content: center;
	row-gap: 1rem;
	/* z-index: 5000000; */
	p.form-title {
		padding: 0 2rem;
		border-bottom: 1px solid ${({ theme }) => theme.txtGrey};
		margin-bottom: 0.5rem;
		font-size: 0.9em;
		text-align: center;
		margin-top: 1rem;
	}
	h3 {
		text-align: center;
		margin: 0;
		position: relative;
		color: ${({ theme }) => theme.txtDarkGrey};
		.close-icon {
			position: absolute;
			right: 0;
			top: 50%;
			transform: translateY(-50%);
			font-size: 2rem;
			color: ${({ theme }) => theme.txtDarkGrey};
		}
	}
	.input-wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		column-gap: 1rem;
		label {
			font-size: 0.9em;
			text-align: right;
			flex: 1;
			span {
				font-size: 0.9em;
				text-align: right;
				flex: 1;
				color: ${({ theme }) => theme.secondaryColor};
			}
		}
		#input-number {
			padding: 0.8rem 1rem;
			margin: 0;
			font-size: 1.8rem;
			color: ${({ theme }) => theme.txtGrey};
			flex: 1;
		}
	}
`;

export default WeightForm;
