'use client';
import React, { useEffect, useRef, useState } from 'react';

const ThemeToggle: React.FC = () => {
	const [theme, setTheme] = useState('light');

	useEffect(() => {
		if (theme === 'dark') {
			document?.querySelector('html')?.classList.add('dark');
			document?.querySelector('#root')?.classList.add('bg-slate-900');
			document?.querySelector('#root')?.classList.remove('bg-white');
		} else {
			document?.querySelector('html')?.classList.remove('dark');
			document?.querySelector('#root')?.classList.remove('bg-slate-900');
			document?.querySelector('#root')?.classList.add('bg-white');
		}
	}, [theme]);

	const handleChangeTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
	};
	console.log(theme);

	return (
		<>
			{theme === 'dark' ? (
				<div
					onClick={handleChangeTheme}
					style={{ cursor: 'pointer' }}
					className="lg:my-5 md:my-2 my-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 30 30"
						width="30"
						height="25">
						<circle cx="15" cy="15" r="15" fill="#000000" />
						<circle cx="5" cy="15" r="15" fill="#ffffff" />
					</svg>
				</div>
			) : (
				<div
					onClick={handleChangeTheme}
					style={{ cursor: 'pointer' }}
					className="lg:my-5 md:my-2 my-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 100 100"
						width="30"
						height="25">
						<circle cx="50" cy="50" r="40" fill="#ffd700" />
					</svg>
				</div>
			)}
		</>
	);
};

export default ThemeToggle;
