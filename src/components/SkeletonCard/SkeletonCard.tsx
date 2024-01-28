'use client';
import React from 'react';

const SkeletonCard: React.FC = ({}) => {
	return (
		<div className="container w-80 h-75 rounded-xl overflow-hidden shadow-lg bg-slate-50 p-4 ">
			<div className="container flex justify-around items-center">
				<div className="flex">
					<div></div>
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
								fill="#3498db"></text>
							<text
								x="50"
								y="65"
								fontSize="12"
								textAnchor="middle"
								dy=".3em"
								fill="#3498db"></text>
						</svg>
					</div>
				</div>
			</div>

			<div className="flex justify-center flex-col gap-1">
				<button className="bg-slate-100 hover:bg-slate-200 active:bg-slate-400 text-black font-bold py-2 px-4 rounded-md">
					View Details
				</button>
				<button className="bg-green-500 hover:bg-green-600 active:bg-green-400 text-white font-bold py-2 px-4 rounded-md">
					Add more data
				</button>
			</div>
		</div>
	);
};

export default SkeletonCard;
