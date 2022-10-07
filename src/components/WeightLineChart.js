import React from 'react';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const WeightLineChart = ({ weights, targets }) => {
	const clonedWeights = [...weights];
	// Math.max(...clonedWeights.map(o => o.target_weight))
	const options = {
		responsive: true,
		plugins: {
			legend: {
				display: false,
			},
			title: {
				display: true,
				text: 'weight timeline',
			},
		},
		scales: {
			y: {
				suggestedMin: targets[0].target_weight,
				suggestedMax:
					Math.ceil(Math.max(...clonedWeights.map((o) => o.load)) / 5) * 5,
				// suggestedMin: targets[0].target_weight,
				// suggestedMax: weights[0].load + 10,
				// suggestedMin: 60,
				// suggestedMax: weights[0].load + 10,
			},
			// yAxes: [
			// 	{
			// 		display: true,
			// 		ticks: {
			// 			suggestedMin: 0, // minimum will be 0, unless there is a lower value.
			// 			// OR //
			// 			beginAtZero: true, // minimum value will be 0.
			// 		},
			// 	},
			// ],
		},
	};

	// const labels = [
	// 	'January',
	// 	'February',
	// 	'March',
	// 	'April',
	// 	'May',
	// 	'June',
	// 	'July',
	// ];

	// let result = objArray.map(a => a.foo);
	const dateLabels = weights.map((a) =>
		new Date(a.createdAt).toLocaleDateString().slice(0, 5)
	);

	// const dateLabels = weights.map((a) => a.createdAt.slice(5, 10));
	// const dateLabels = weights.map((a) => a.createdAt);

	const data = {
		labels: dateLabels,
		// labels: weights.map((a) => a.createdA),
		// labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
		datasets: [
			{
				label: 'Kgs',
				data: weights.map((a) => a.load),
				// data: [100, 115, 200, 50, 523],
				// data: labels.map(() =>
				// 	faker.datatype.number({ min: -1000, max: 1000 })
				// ),
				borderColor: 'rgb(38, 151, 244)',
				backgroundColor: 'rgba(99, 133, 255, 0.5)',
				// borderColor: 'rgb(255, 99, 132)',
				// backgroundColor: 'rgba(255, 99, 132, 0.5)',
			},
			// {
			// 	label: 'Dataset 2',
			// 	data: labels.map(() =>
			// 		faker.datatype.number({ min: -1000, max: 1000 })
			// 	),
			// 	borderColor: 'rgb(53, 162, 235)',
			// 	backgroundColor: 'rgba(53, 162, 235, 0.5)',
			// },
		],
	};

	return <Line options={options} data={data} />;
};

export default WeightLineChart;
