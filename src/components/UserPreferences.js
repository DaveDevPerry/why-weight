import React from 'react';
import styled from 'styled-components';
import Toggle from './Toggler';
import UserDefaultMeasurementUnit from './UserDefaultMeasurementUnit';

const UserPreferences = ({ theme, toggleTheme }) => {
	return (
		<StyledUserPreferences>
			<h5 className='sub-heading'>preferences</h5>

			<Toggle toggleTheme={toggleTheme} theme={theme} />
			<UserDefaultMeasurementUnit theme={theme} />
		</StyledUserPreferences>
	);
};
const StyledUserPreferences = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	flex: 1;
	.sub-heading {
		color: ${({ theme }) => theme.secondaryColor};
		border-bottom: 1px solid ${({ theme }) => theme.secondaryColor};
		margin-bottom: 1rem;
		width: 100%;
	}
	/* font-size: 1.4rem; */
`;

export default UserPreferences;
