'use client';
import React from 'react';
import './SkeletonCard.css';

export type SkeletonCardProps = {
	// tipos...
};

const SkeletonCard: React.FC<SkeletonCardProps> = ({}) => {
	return (
		<div className="container w-80 h-75 rounded-xl overflow-hidden shadow-lg bg-slate-50 p-4 ">
			<div className="container flex justify-around items-center">
				<div className="flex">
					<div>
						<img
							className="rounded-2xl w-20 object-cover"
							src={'h'}
							alt="Producto"
						/>
						<p className="mt-2 text-sm font-bold text-gray-600">
							{/* Agrega contenido de texto aquí */}
						</p>
					</div>
					<p className="mt-5 h-5 text-xs font-medium px-2.5 py-0.5 rounded">
						{/* Agrega contenido de texto aquí */}
					</p>
				</div>
				<div className="type">
					<div>
						<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
							<circle
								cx="50"
								cy="50"
								r={3}
								stroke="#e0e0e0"
								strokeWidth="8"
								fill="none"
							/>
							<circle
								cx="50"
								cy="50"
								r={3}
								stroke="#3498db"
								strokeWidth="8"
								fill="none"
								strokeDasharray={4}
								strokeDashoffset={5}
							/>
							<text
								x="50"
								y="50"
								fontSize="20"
								textAnchor="middle"
								dy=".3em"
								fill="#3498db">
								{/* Agrega contenido de texto aquí */}
							</text>
							<text
								x="50"
								y="65"
								fontSize="12"
								textAnchor="middle"
								dy=".3em"
								fill="#3498db">
								{/* Agrega contenido de texto aquí */}
							</text>
						</svg>
					</div>
				</div>
			</div>
			<p>{/* Agrega contenido de texto aquí */}</p>
			<p className="text-gray-700 text-base mt-4">
				{/* Agrega contenido de texto aquí */}
			</p>
			<div className="px-6 py-4">{/* Agrega contenido para este div */}</div>
			<div className="flex justify-center flex-col gap-1">
				<div>
					<button className="bg-slate-100 hover:bg-slate-200 active:bg-slate-400 text-black font-bold py-2 px-4 rounded-md">
						View Details
					</button>
					<button className="bg-green-500 hover:bg-green-600 active:bg-green-400 text-white font-bold py-2 px-4 rounded-md">
						Add more data
					</button>
				</div>
			</div>
		</div>
	);
};

export default SkeletonCard;
