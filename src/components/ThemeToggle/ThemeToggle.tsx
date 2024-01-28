'use client';
import React, { useEffect, useRef, useState } from 'react';

const ThemeToggle: React.FC = ({}) => {
	const [theme, setTheme] = useState<'dark' | 'light'>('light');

	const htmlRef = useRef<HTMLHtmlElement>(null);
	const rootRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const htmlElement = htmlRef.current;
		const rootElement = rootRef.current;

		if (theme === 'dark') {
			htmlElement?.classList.add('dark');
			rootElement?.classList.add('bg-slate-900');
			rootElement?.classList.remove('bg-white');
		} else {
			htmlElement?.classList.remove('dark');
			rootElement?.classList.remove('bg-slate-900');
			rootElement?.classList.add('bg-white');
		}
	}, [theme]);

	const handleChangeTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
	};

	return (
		<>
			{theme === 'dark' ? (
				<div onClick={handleChangeTheme} style={{ cursor: 'pointer' }}>
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
				<div onClick={handleChangeTheme} style={{ cursor: 'pointer' }}>
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
