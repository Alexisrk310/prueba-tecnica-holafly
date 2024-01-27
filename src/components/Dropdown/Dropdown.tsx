'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

type DropdownProps = {
	username: string;
};

const Dropdown: React.FC<DropdownProps> = ({ username }) => {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const handleClickOutside = (event: MouseEvent) => {
		if (
			dropdownRef.current &&
			!dropdownRef.current.contains(event.target as Node)
		) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, []);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const dropdownItems = [
		{
			label: 'Account',
			link: '#',
			icon: 'M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z',
		},
		{
			label: 'Sign off',
			link: '/',
			icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 13h-2v-2h2v2zm0-4h-2V7h2v4z',
		},
	];

	const isMobile = window.innerWidth <= 768;
	const dropdownClasses = `absolute font-normal bg-white shadow overflow-hidden rounded w-48 border mt-2 py-1 ${
		isMobile ? 'left-0' : 'right-0'
	} z-20`;

	return (
		<div className="relative" ref={dropdownRef}>
			<button onClick={toggleDropdown} className="flex items-center">
				<img
					src="http://www.gravatar.com/avatar?d=mm"
					alt="avatar"
					className="w-8 h-8 rounded-full mr-2"
				/>
				{username}
				<svg
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					width="24"
					height="24">
					<path
						d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
						className="heroicon-ui"></path>
				</svg>
			</button>
			{isOpen && (
				<ul className={dropdownClasses}>
					{dropdownItems.map((item, index) => (
						<li key={index}>
							<Link
								href={item.link}
								className="flex items-center px-3 py-3 hover:bg-gray-200">
								<svg
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									width="24"
									height="24"
									className="text-gray-600">
									<path d={item.icon} className="heroicon-ui"></path>
								</svg>
								<span className="ml-2">{item.label}</span>
							</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Dropdown;
