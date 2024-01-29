'use client';
import React from 'react';
import { CardProps } from '../../interfaces/cardProps';

const Card: React.FC<CardProps> = ({
	status,
	dateStart,
	dateEnd,
	flag,
	country,
	consumption,
	plan,
	planGB,
}) => {
	const circumference = 251.2;
	const radius = 40;
	const offset =
		circumference -
		(consumption?.totalComsumption / (1024 * 1024) || 0 / 100) * circumference;
	let datePlan = plan.split(',');
	let daysDatePlan = datePlan[0].trim();
	let gbDatePlan = datePlan[1].trim();
	const getBackgroundColor = () =>
		status === 'Active'
			? 'bg-blue-100'
			: status === 'Pending'
			? 'bg-yellow-200'
			: status === 'Expired'
			? 'bg-gray-200'
			: '';

	const getTextColor = () =>
		status === 'Active'
			? 'text-blue-800'
			: status === 'Pending'
			? 'text-yellow-800'
			: status === 'Expired'
			? 'text-gray-500'
			: '';

	return (
		<div className=" min-w-72 h-75  rounded-xl overflow-hidden shadow-lg bg-slate-50 dark:bg-slate-500 p-7 ">
			<div className="container flex justify-between items-center">
				<div className="flex">
					<div>
						<img
							className="rounded-2xl w-20 object-cover"
							src={flag}
							alt="Producto"
							width={80}
							height={80}
						/>
						<p className="mt-2 text-lg font-bold text-gray-600 dark:text-black">
							{country}
						</p>
					</div>
					<p
						className={`mt-5 h-5 text-xs font-medium px-2.5 py-0.5 rounded ${getBackgroundColor()} ${getTextColor()}`}>
						{status}
					</p>
				</div>
				<>
					{status === 'Pending' && (
						<div className="w-32  relative flex justify-center items-center">
							<img
								src="../../calendar.png"
								width={100}
								height={200}
								className="absolute w-96 "
							/>
							<div>
								<p className="mt-10">{gbDatePlan}</p>
								<p className="">{daysDatePlan}</p>
							</div>
						</div>
					)}
					{status === 'Active' && (
						<div>
							<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
								<circle
									cx="50"
									cy="50"
									r={radius}
									stroke="#e0e0e0"
									strokeWidth="8"
									fill="none"
								/>
								<circle
									cx="50"
									cy="50"
									r={radius}
									stroke="#3498db"
									strokeWidth="8"
									fill="none"
									strokeDasharray={circumference}
									strokeDashoffset={!planGB ? 0 : planGB * 1024}
								/>
								<text
									x="50"
									y="50"
									fontSize="20"
									textAnchor="middle"
									dy=".3em"
									fill="#3498db">
									{offset}
								</text>
								<text
									x="50"
									y="65"
									fontSize="12"
									textAnchor="middle"
									dy=".3em"
									fill="#3498db">
									{`/${planGB}GB`}
								</text>
							</svg>
						</div>
					)}
				</>
			</div>

			<p>{`${dateStart}${dateEnd ? ` - ${dateEnd}` : ''}`}</p>
			<p className="text-gray-700 text-base mt-4">{plan}</p>
			<div className="px-6 py-4"></div>
			<div className="flex justify-center flex-col gap-3">
				{status === 'Active' && (
					<>
						<button className="bg-slate-200 dark:bg-slate-400 hover:bg-slate-300  text-black font-bold py-2 px-4 rounded-md">
							View Details
						</button>
						<button className="bg-green-500 dark:bg-green-600 hover:bg-green-700  text-white font-bold py-2 px-4 rounded-md">
							Add more data
						</button>
					</>
				)}
				{status === 'Pending' && (
					<button className="bg-red-500 dark:bg-red-800 hover:bg-red-600  text-white font-bold py-2 px-4 rounded-md">
						View Details and Install
					</button>
				)}
			</div>
		</div>
	);
};

export default Card;
