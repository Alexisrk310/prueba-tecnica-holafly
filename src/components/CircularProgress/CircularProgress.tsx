'use client';
import React, { useState } from 'react';

type CircularProgressProps = {};

const CircularProgress: React.FC<CircularProgressProps> = () => {
	const [progress, setProgress] = useState<number>(80);

	const circumference = 251.2;
	const radius = 40;
	const offset = circumference - (progress / 100) * circumference;

	return (
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
	);
};

export default CircularProgress;
