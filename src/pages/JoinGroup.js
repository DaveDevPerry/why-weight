// import { useEffect } from 'react';
// import { useGigsContext } from '../hooks/useGigsContext';
// import { useAuthContext } from '../hooks/useAuthContext';

import styled from 'styled-components';
import { motion } from 'framer-motion';
// import GroupForm from '../components/GroupForm';
// import { useBandsContext } from '../hooks/useBandsContext';
// import { useCitiesContext } from '../hooks/useCitiesContext';
// import { useVenuesContext } from '../hooks/useVenuesContext';
// import { useStateContext } from '../lib/context';
// import { useNavigate } from 'react-router-dom';
import { log } from '../helper';
import GroupJoinForm from '../components/GroupJoinForm';
import { useEffect } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { useGroupsContext } from '../hooks/useGroupsContext';
// import GroupForm from '../components/GroupForm';

// components
// import GigsList from '../components/GigsList';
// import WeightsProgressWidget from '../components/WeightsProgressWidget';
// import WeightUnitsWidget from '../components/WeightUnitsWidget';

const JoinGroup = () => {
	// const [workouts, setWorkouts] = useState(null);
	// const { gigData, dispatch } = useGigsContext();
	// const { dispatch: bandDispatch } = useBandsContext();
	// const { dispatch: cityDispatch } = useCitiesContext();
	// const { dispatch: venueDispatch } = useVenuesContext();
	// const { bands, dispatch: bandDispatch} = useBandsContext();
	// const { gigs, dispatch } = useGigsContext();
	// const { gigs, dispatch } = useGigsContext();
	// const { targets, dispatch: targetDispatch } = useTargetsContext();
	const { dispatch } = useGroupsContext();
	const { user } = useAuthContext();

	// const { dataLoaded } = useStateContext();

	// let navigate = useNavigate();
	// useEffect(() => {
	// 	if (dataLoaded === false) {
	// 		navigate('/');
	// 	}
	// }, [navigate, dataLoaded]);

	useEffect(() => {
		const fetchGroups = async () => {
			const response = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}/api/groups`,
				{
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				}
			);
			const json = await response.json();
			// // get future gigs only
			log(json, 'json get all groups');
			// const clonedGigs = [...json];
			// const upcomingGigs = clonedGigs.sort((a, b) => {
			// 	return new Date(b.gig_date) - new Date(a.gig_date);
			// });
			// log(upcomingGigs, 'upcoming');
			// const upcomingGigsSort = json.sort((a, b) => {
			// 	return new Date(a.gig_date) - new Date(b.gig_date);
			// });
			// log(upcomingGigsSort, 'upcoming');
			// const filtered = upcomingGigsSort.filter((gig) => {
			// 	return (
			// 		new Date(gig.gig_date) > new Date() ||
			// 		new Date(gig.gig_date) === new Date()
			// 	);
			// });
			// log(filtered, 'filtered');

			if (response.ok) {
				// setWorkouts(json);
				// dispatch({
				// 	type: 'SET_GROUPS',
				// 	payload: json,
				// 	// payload: json,
				// });
			}
		};
		// if we have a value for the user then fetch the workouts
		if (user) {
			fetchGroups();
		}
	}, [dispatch, user]);

	// useEffect(() => {
	// 	const fetchBands = async () => {
	// 		const response = await fetch(
	// 			`${process.env.REACT_APP_BACKEND_URL}/api/bands`,
	// 			{
	// 				headers: {
	// 					Authorization: `Bearer ${user.token}`,
	// 				},
	// 			}
	// 		);
	// 		const json = await response.json();
	// 		// // get future gigs only
	// 		// log(json, 'json set gigs');
	// 		// const clonedGigs = [...json];
	// 		// const upcomingGigs = clonedGigs.sort((a, b) => {
	// 		// 	return new Date(b.gig_date) - new Date(a.gig_date);
	// 		// });
	// 		// log(upcomingGigs, 'upcoming');
	// 		// const upcomingGigsSort = json.sort((a, b) => {
	// 		// 	return new Date(a.gig_date) - new Date(b.gig_date);
	// 		// });
	// 		// log(upcomingGigsSort, 'upcoming');
	// 		// const filtered = upcomingGigsSort.filter((gig) => {
	// 		// 	return (
	// 		// 		new Date(gig.gig_date) > new Date() ||
	// 		// 		new Date(gig.gig_date) === new Date()
	// 		// 	);
	// 		// });
	// 		// log(filtered, 'filtered');

	// 		if (response.ok) {
	// 			// setWorkouts(json);
	// 			bandDispatch({
	// 				type: 'SET_BANDS',
	// 				payload: json,
	// 				// payload: json,
	// 			});
	// 		}
	// 	};
	// 	// if we have a value for the user then fetch the workouts
	// 	if (user) {
	// 		fetchBands();
	// 	}
	// }, [bandDispatch, user]);

	// // log(gigData, 'gig data');
	// // log(gigData.bandStats, 'gig data');
	// // log(bands, 'gig data - bands');
	// // log(all_gigs, 'gig data - gigs');

	// useEffect(() => {
	// 	const fetchVenues = async () => {
	// 		const response = await fetch(
	// 			`${process.env.REACT_APP_BACKEND_URL}/api/venues`,
	// 			{
	// 				headers: {
	// 					Authorization: `Bearer ${user.token}`,
	// 				},
	// 			}
	// 		);
	// 		const json = await response.json();
	// 		// // get future gigs only
	// 		// log(json, 'json set gigs');
	// 		// const clonedGigs = [...json];
	// 		// const upcomingGigs = clonedGigs.sort((a, b) => {
	// 		// 	return new Date(b.gig_date) - new Date(a.gig_date);
	// 		// });
	// 		// log(upcomingGigs, 'upcoming');
	// 		// const upcomingGigsSort = json.sort((a, b) => {
	// 		// 	return new Date(a.gig_date) - new Date(b.gig_date);
	// 		// });
	// 		// log(upcomingGigsSort, 'upcoming');
	// 		// const filtered = upcomingGigsSort.filter((gig) => {
	// 		// 	return (
	// 		// 		new Date(gig.gig_date) > new Date() ||
	// 		// 		new Date(gig.gig_date) === new Date()
	// 		// 	);
	// 		// });
	// 		// log(filtered, 'filtered');

	// 		if (response.ok) {
	// 			// setWorkouts(json);
	// 			venueDispatch({
	// 				type: 'SET_VENUES',
	// 				payload: json,
	// 				// payload: json,
	// 			});
	// 		}
	// 	};
	// 	// if we have a value for the user then fetch the workouts
	// 	if (user) {
	// 		fetchVenues();
	// 	}
	// }, [venueDispatch, user]);

	// useEffect(() => {
	// 	const fetchCities = async () => {
	// 		const response = await fetch(
	// 			`${process.env.REACT_APP_BACKEND_URL}/api/cities`,
	// 			{
	// 				headers: {
	// 					Authorization: `Bearer ${user.token}`,
	// 				},
	// 			}
	// 		);
	// 		const json = await response.json();
	// 		// // get future gigs only
	// 		// log(json, 'json set gigs');
	// 		// const clonedGigs = [...json];
	// 		// const upcomingGigs = clonedGigs.sort((a, b) => {
	// 		// 	return new Date(b.gig_date) - new Date(a.gig_date);
	// 		// });
	// 		// log(upcomingGigs, 'upcoming');
	// 		// const upcomingGigsSort = json.sort((a, b) => {
	// 		// 	return new Date(a.gig_date) - new Date(b.gig_date);
	// 		// });
	// 		// log(upcomingGigsSort, 'upcoming');
	// 		// const filtered = upcomingGigsSort.filter((gig) => {
	// 		// 	return (
	// 		// 		new Date(gig.gig_date) > new Date() ||
	// 		// 		new Date(gig.gig_date) === new Date()
	// 		// 	);
	// 		// });
	// 		// log(filtered, 'filtered');

	// 		if (response.ok) {
	// 			// setWorkouts(json);
	// 			cityDispatch({
	// 				type: 'SET_CITIES',
	// 				payload: json,
	// 				// payload: json,
	// 			});
	// 		}
	// 	};
	// 	// if we have a value for the user then fetch the workouts
	// 	if (user) {
	// 		fetchCities();
	// 	}
	// }, [cityDispatch, user]);

	log('join group');

	return (
		<StyledGroups
			className='groups-page'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			{/* <WeightForm /> */}
			{/* <WeightUnitsWidget gigs={gigs} /> */}
			{/* <WeightConvertor /> */}
			{/* <gigsProgressWidget gigs={gigs} /> */}
			{/* {gigData &&
				gigData.bandStats.forEach((band, index) => <p key={index}>{band}</p>)} */}
			{/* {gigData && gigData.bands.map((band, index) => <p key={index}>{band}</p>)} */}

			{/* <p className='next-five-list-header'>Create Gig</p> */}
			<GroupJoinForm />
			{/* <GigsList gigs={upcoming_gigs} /> */}
			{/* <GigsList gigs={gigs} /> */}
		</StyledGroups>
	);
};
const StyledGroups = styled(motion.div)`
	display: flex;
	flex-direction: column;
	row-gap: 1rem;
	/* border: 2px solid green; */
	height: -webkit-fill-available;
	/* justify-content: flex-start; */
	/* overflow-y: auto; */
	/* overflow-y: hidden; */
	/* flex: 1; */
	/* overflow-y: auto; */
	/* border: 2px solid red; */
	/* .next-five-list-header {
		color: ${({ theme }) => theme.secondaryColor};
		font-weight: bold;
		border-bottom: 1px solid ${({ theme }) => theme.secondaryColor};
	} */
`;

export default JoinGroup;
