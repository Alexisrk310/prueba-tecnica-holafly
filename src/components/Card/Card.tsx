'use client';
import React, { useState } from 'react';
import './Card.css';
// import { CircularProgress } from '../CircularProgress';
import Image from 'next/image';
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

	status == 'Pending' ? console.log(consumption?.totalComsumption) : undefined;
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
	console.log(planGB);

	return (
		<div className="container w-80 h-75  rounded overflow-hidden shadow-lg bg-slate-50 p-4 ">
			<div className="container flex justify-around items-center">
				<div className="flex">
					<div>
						<img
							className="rounded-2xl w-20 object-cover"
							src={flag}
							alt="Producto"
							// width={100}
							// height={100}
						/>
						<p className="mt-2 text-sm font-bold text-gray-600">{country}</p>
					</div>
					<p
						className={`mt-5 h-5 text-xs font-medium px-2.5 py-0.5 rounded ${getBackgroundColor()} ${getTextColor()}`}>
						{status}
					</p>
				</div>
				<div className="type">
					{status === 'Pending' ? (
						// DAYS
						<svg width="120" height="160" xmlns="http://www.w3.org/2000/svg">
							<rect
								x="10"
								y="10"
								width="100"
								height="100"
								rx="20"
								ry="20"
								fill="#f0f0f0"
								stroke="#ccc"
								strokeWidth="2"
							/>

							<rect
								x="10"
								y="10"
								width="100"
								height="20"
								rx="20"
								ry="20"
								fill="#4285F4"
							/>

							<text
								x="60"
								y="60"
								fontSize="24"
								textAnchor="middle"
								dominantBaseline="middle"
								fill="#333">
								{gbDatePlan}
							</text>

							<text
								x="60"
								y="90"
								fontSize="12"
								textAnchor="middle"
								dominantBaseline="middle"
								fill="#555">
								{daysDatePlan}
							</text>
						</svg>
					) : status === 'Active' ? (
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
									strokeDashoffset={planGB == undefined ? 0 : planGB * 1024}
								/>
								<text
									x="50"
									y="50"
									fontSize="20"
									textAnchor="middle"
									dy=".3em"
									fill="#3498db">
									{offset == undefined ? 0 : Math.trunc(offset)}
								</text>
								<text
									x="50"
									y="65"
									fontSize="12"
									textAnchor="middle"
									dy=".3em"
									fill="#3498db">
									{`/${planGB}` == undefined ? 0 : `/${planGB}GB`}
								</text>
							</svg>
						</div>
					) : // <CircularProgress />
					status === 'Expired' ? (
						<></>
					) : undefined}
				</div>
			</div>
			{/* <p className="text-gray-700 text-base mt-4">5 days plan, 5GB</p> */}
			{/* <p className="text-gray-700 text-base mt-4">{date}</p> */}
			<p>{`${dateStart}${dateEnd ? ` - ${dateEnd}` : ''}`}</p>
			<p className="text-gray-700 text-base mt-4">{plan}</p>
			<div className="px-6 py-4"></div>
			<div className="flex justify-center flex-col gap-1">
				{status === 'Active' ? (
					<>
						<button className="bg-slate-100 hover:bg-slate-200 active:bg-slate-400 text-black font-bold py-2 px-4 rounded-md">
							View Details
						</button>
						<button className="bg-green-500 hover:bg-green-600 active:bg-green-400 text-white font-bold py-2 px-4 rounded-md">
							Add more data
						</button>
					</>
				) : status === 'Pending' ? (
					<button className="bg-red-500 hover:bg-red-600 active:bg-red-400 text-white font-bold py-2 px-4 rounded-md">
						View Details and Install
					</button>
				) : status === 'Expired' ? (
					<></>
				) : undefined}
			</div>
		</div>
	);
};

export default Card;
