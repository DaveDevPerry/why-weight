import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Clock from './Clock';

const TargetCountdownWidget = ({ isNextDayCountdownActive, target }) => {
	const [timerDays, setTimerDays] = useState();
	const [timerHours, setTimerHours] = useState();
	const [timerMinutes, setTimerMinutes] = useState();
	const [timerSeconds, setTimerSeconds] = useState();

	useEffect(() => {
		log('start timer');
		let nextMidnight = new Date(target.deadline_date);
		// let nextMidnight = new Date();
		nextMidnight.setHours(24, 0, 0, 0);

		const countDownDate = nextMidnight.getTime();
		// const countDownDate = new Date('06 Apr, 2022').getTime();
		// const countDownDate = new Date('05 Apr, 2022').getTime();
		// const date = new Date();
		// const countDownDate = date.setDate(date.getDate() + 1);
		log(countDownDate);

		let interval = setInterval(() => {
			const now = new Date().getTime();
			const distance = countDownDate - now;
			const days = Math.floor(distance / (1000 * 60 * 60 * 24));
			const hours = Math.floor(
				(distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
			);
			const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
			const seconds = Math.floor((distance % (60 * 1000)) / 1000);
			if (isNextDayCountdownActive === false) {
				clearInterval(interval.current);
				return;
			}
			if (distance < 0) {
				// Stop Timer
				clearInterval(interval.current);
			} else {
				// Update Timer
				setTimerDays(days);
				setTimerHours(hours);
				setTimerMinutes(minutes);
				setTimerSeconds(seconds);
			}
		});
	}, [isNextDayCountdownActive]);

	return (
		<StyledTargetCountdownWidget className='date-countdown-container'>
			<Clock
				timerDays={timerDays}
				timerHours={timerHours}
				timerMinutes={timerMinutes}
				timerSeconds={timerSeconds}
			/>
		</StyledTargetCountdownWidget>
	);
};
const StyledTargetCountdownWidget = styled.div`
	display: flex;
	align-items: center;
	gap: 30px;
	.clock {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		column-gap: 0.2rem;
	}

	.clock section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.clock section p {
		font-size: 4rem;
		font-family: 'Roboto Mono', monospace;
	}
	.clock section small {
		color: silver;
		text-shadow: none;
	}
`;

export default TargetCountdownWidget;
