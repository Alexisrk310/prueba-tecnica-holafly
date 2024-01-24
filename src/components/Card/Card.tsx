'use client';
import React, { useEffect, useState } from 'react';
import './Card.css';
import { CircularProgress } from '../CircularProgress';

export type CardProps = {
	type?: 'PENDING' | 'ACTIVE' | 'EXPIRED';
};

const Card: React.FC<CardProps> = ({}) => {
	const [typeCard, setTypeCard] = useState<CardProps>({
		type: 'ACTIVE',
	});
	useEffect(() => {
		setTypeCard({ type: 'EXPIRED' });
	}, []);

	return (
		<div className="max-w-80 rounded overflow-hidden shadow-lg bg-white">
			<div className="flex justify-around items-center">
				<div className="flex">
					<div>
						<img
							className="rounded-full w-14"
							src="https://via.placeholder.com/300"
							alt="Producto"
						/>
						<p>Spain</p>
					</div>
					<p className="mt-5 h-5 bg-blue-100 text-blue-800 text-xs font-medium  px-2.5 py-0.5 rounded">
						{typeCard.type}
					</p>
				</div>
				<div>
					{typeCard.type == 'ACTIVE' ? (
						<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
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
								5
							</text>
						</svg>
					) : typeCard.type == 'PENDING' ? (
						<CircularProgress />
					) : typeCard.type == 'EXPIRED' ? (
						<></>
					) : undefined}
				</div>
			</div>
			<div className="px-6 py-4">
				<p className="text-gray-700 text-base">
					Descripción corta del producto.
				</p>
			</div>
			<div className="flex justify-center p-5">
				<button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md	">
					View Details and install
				</button>
			</div>
		</div>
	);
};

export default Card;
