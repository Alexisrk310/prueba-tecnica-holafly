'use client';
import React, { useState } from 'react';
import './Card.css';
import { CircularProgress } from '../CircularProgress';
import Image from 'next/image';

export type CardProps = {
	typeCard?: 'PENDING' | 'ACTIVE' | 'EXPIRED';
	city: string;
	date?: string;
	plan: string;
	storage: string;
	comsuption: string;
};

const Card: React.FC<CardProps> = ({
	typeCard,
	city,
	date,
	plan,
	storage,
	comsuption,
}: CardProps) => {
	const [progress, setProgress] = useState<number>(0);

	const circumference = 251.2;
	const radius = 40;
	const offset = circumference - (progress / 100) * circumference;

	const getBackgroundColor = () =>
		typeCard === 'ACTIVE'
			? 'bg-blue-100'
			: typeCard === 'PENDING'
			? 'bg-warning'
			: typeCard === 'EXPIRED'
			? 'bg-gray-200'
			: '';

	const getTextColor = () =>
		typeCard === 'ACTIVE'
			? 'text-blue-800'
			: typeCard === 'PENDING'
			? 'text-warning'
			: typeCard === 'EXPIRED'
			? 'text-gray-500'
			: '';

	return (
		<div className="max-w-80  rounded overflow-hidden shadow-lg bg-white p-4 ">
			<div className="flex justify-around items-center">
				<div className="flex">
					<div className="mr-4">
						<Image
							className="rounded-full w-14"
							src="https://via.placeholder.com/300"
							alt="Producto"
							width={56}
							height={56}
						/>
						<p className="mt-2 text-sm font-medium text-gray-600">{city}</p>
					</div>
					<p
						className={`mt-5 h-5 text-xs font-medium px-2.5 py-0.5 rounded ${getBackgroundColor()} ${getTextColor()}`}>
						{typeCard}
					</p>
				</div>
				<div className="type">
					{typeCard === 'PENDING' ? (
						// GB BAR
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
								{storage}
							</text>

							<text
								x="50"
								y="70"
								font-size="10"
								text-anchor="middle"
								dominant-baseline="middle"
								fill="#333">
								{typeCard == 'PENDING'
									? `/${comsuption}GB`
									: typeCard === 'PENDING'
									? `/${comsuption}Days`
									: undefined}
							</text>
						</svg>
					) : typeCard === 'ACTIVE' ? (
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
									{`${progress}%`}
								</text>
							</svg>
						</div>
					) : // <CircularProgress />
					typeCard === 'EXPIRED' ? (
						<></>
					) : undefined}
				</div>
			</div>
			{/* <p className="text-gray-700 text-base mt-4">5 days plan, 5GB</p> */}
			<p className="text-gray-700 text-base mt-4">{date}</p>
			<p className="text-gray-700 text-base mt-4">{plan}</p>
			<div className="px-6 py-4"></div>
			<div className="flex justify-center flex-col gap-1">
				{typeCard === 'ACTIVE' ? (
					<>
						<button className="bg-white hover:bg-slate-400 text-black font-bold py-2 px-4 rounded-md">
							View Details
						</button>
						<button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md">
							Add more data
						</button>
					</>
				) : typeCard === 'PENDING' ? (
					<button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md">
						View Details and Install
					</button>
				) : typeCard === 'EXPIRED' ? (
					<></>
				) : undefined}
			</div>
		</div>
	);
};

export default Card;
