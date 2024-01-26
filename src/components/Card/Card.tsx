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
}) => {
	const circumference = 251.2;
	const radius = 40;
	const offset =
		circumference - (consumption?.totalComsumption / 100) * circumference;

	const getBackgroundColor = () =>
		status === 'Active'
			? 'bg-blue-100'
			: status === 'Pending'
			? 'bg-warning'
			: status === 'Expired'
			? 'bg-gray-200'
			: '';

	const getTextColor = () =>
		status === 'Active'
			? 'text-blue-800'
			: status === 'Pending'
			? 'text-warning'
			: status === 'Expired'
			? 'text-gray-500'
			: '';

	return (
		<div className="max-w-80  rounded overflow-hidden shadow-lg bg-white p-4 ">
			<div className="flex justify-around items-center">
				<div className="flex">
					<div className="mr-4">
						<img
							className="rounded-full w-14"
							src={flag}
							alt="Producto"
							width={56}
							height={56}
						/>
						<p className="mt-2 text-sm font-medium text-gray-600">{country}</p>
					</div>
					<p
						className={`mt-5 h-5 text-xs font-medium px-2.5 py-0.5 rounded ${getBackgroundColor()} ${getTextColor()}`}>
						{status}
					</p>
				</div>
				<div className="type">
					{status === 'Pending' ? (
						// DAYS
						<svg width="100" height="150" xmlns="http://www.w3.org/2000/svg">
							<rect
								x="5"
								y="5"
								width="90"
								height="90"
								rx="15"
								ry="15"
								fill="#f0f0f0"
								stroke="#999"
								stroke-width="1"
							/>

							<rect
								x="5"
								y="5"
								width="90"
								height="15"
								rx="15"
								ry="15"
								fill="#4285F4"
							/>

							<text
								x="50"
								y="50"
								font-size="20"
								text-anchor="middle"
								dominant-baseline="middle"
								fill="#333">
								{consumption}
							</text>

							<text
								x="50"
								y="70"
								font-size="10"
								text-anchor="middle"
								dominant-baseline="middle"
								fill="#333">
								{status == 'Pending'
									? `/${consumption}GB`
									: status === 'Pending'
									? `/${consumption}Days`
									: undefined}
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
									strokeDashoffset={offset}
								/>
								<text
									x="50"
									y="50"
									fontSize="20"
									textAnchor="middle"
									dy=".3em"
									fill="#3498db">
									{`${plan}`}
								</text>
							</svg>
						</div>
					) : // <CircularProgress />
					status === 'Expired' ? (
						<p>{`${dateStart}-${dateEnd}`}</p>
					) : undefined}
				</div>
			</div>
			{/* <p className="text-gray-700 text-base mt-4">5 days plan, 5GB</p> */}
			{/* <p className="text-gray-700 text-base mt-4">{date}</p> */}
			<p className="text-gray-700 text-base mt-4">{plan}</p>
			<div className="px-6 py-4"></div>
			<div className="flex justify-center flex-col gap-1">
				{status === 'Active' ? (
					<>
						<button className="bg-white hover:bg-slate-400 text-black font-bold py-2 px-4 rounded-md">
							View Details
						</button>
						<button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md">
							Add more data
						</button>
					</>
				) : status === 'Pending' ? (
					<button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md">
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
