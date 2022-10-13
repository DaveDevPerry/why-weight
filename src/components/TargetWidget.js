import { format } from 'date-fns';
import React from 'react';
import styled from 'styled-components';

const TargetWidget = ({ targets }) => {
	return (
		<StyledTargetWidget>
			{/* <StyledTargetWidget className='br'> */}
			{/* <h3>
				target weight
			</h3> */}
			<h5 className='sub-heading'>target weight</h5>
			<ul className='target-list'>
				{targets.length === 1 && (
					<>
						<li>
							<p>target:</p>
							<span>{targets[0].target_weight.toFixed(2)} Kgs</span>
						</li>
						<li>
							<p>date:</p>
							<span>
								{format(new Date(targets[0].deadline_date), 'dd/MM/yyyy')}
							</span>
						</li>
						<li>
							<p>event:</p>
							<span>{targets[0].deadline_reason}</span>
						</li>
					</>
				)}
			</ul>
		</StyledTargetWidget>
	);
};
const StyledTargetWidget = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	/* row-gap: 0.5rem; */
	color: ${({ theme }) => theme.txtGrey};

	.sub-heading {
		color: ${({ theme }) => theme.secondaryColor};
		border-bottom: 1px solid ${({ theme }) => theme.secondaryColor};
		margin-bottom: 1rem;
		width: 100%;
	}
	.target-list {
		list-style: none;
		font-size: 1.4rem;
		li {
			display: flex;
			align-items: center;
			column-gap: 1rem;
			p {
				width: 6rem;
				text-align: right;
				font-weight: bold;
			}
		}
	}
`;
// const StyledTargetWidget = styled.div`
// 	padding: 0.5rem 1rem;
// 	.target-list {
// 		list-style: none;
// 		li {
// 			display: flex;
// 			align-items: center;
// 			column-gap: 1rem;
// 			p {
// 				width: 5rem;
// 				text-align: right;
// 				font-weight: bold;
// 			}
// 		}
// 	}
// `;

export default TargetWidget;
