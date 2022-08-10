import React, { useState } from 'react';
import styled from 'styled-components';

const WeightConvertor = () => {
	const [kilograms] = useState('');
	// const [kilograms, setKilograms] = useState('');
	// const [convertFrom, setConvertFrom] = useState('')

	const handleWeight = (e) => {
		console.log(e.target.value);
	};
	const weightConversionUnitHandler = (e) => {
		console.log(e.target.textContent);
		// setTodoStatus(e.target.value);
		// setStatus(e.target.value);
	};
	return (
		<StyledWeightConvertor>
			<form onSubmit={(e) => e.preventDefault()} noValidate autoComplete='off'>
				<h1 className='title'>Weight Converter</h1>

				<select
					name='weight-unit'
					className='weight-unit-select'
					onChange={weightConversionUnitHandler}
				>
					<option value=''>select unit</option>
					<option value='pounds'>pounds</option>
					<option value='stone'>stone</option>
				</select>
				<input
					// id='standard-number'
					placeholder='Enter weight'
					// value={initialState.pounds}
					onChange={(e) => handleWeight}
					// onChange={(e) => setNewPounds(e.target.value)}
					type='number'
					// margin='normal'/
					className='input-field'
				/>

				<p>kilograms: {kilograms && kilograms}</p>
			</form>
		</StyledWeightConvertor>
	);
};
const StyledWeightConvertor = styled.div`
	form {
		display: grid;
		grid-template-rows: repeat(6, 1fr);
		grid-template-columns: minmax(100px, 100%);
		justify-items: center;
		align-items: center;
		width: 100%;
		height: 100%;
	}

	.title {
		color: #3f51b5;
	}
`;

export default WeightConvertor;
