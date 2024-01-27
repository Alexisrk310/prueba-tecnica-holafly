'use client';
import React from 'react';
import './NavBar.css';
import Link from 'next/link';

export type NavBarProps = {
	// types...
};

const NavBar: React.FC<NavBarProps> = ({}) => {
	const links = [
		{ name: 'Home', href: '/homepage' },
		{
			name: 'Cerrar sesión',
			href: '/',
			handleClick: () => {
				userData && localStorage.removeItem('@user');
			},
		},
	];
	let userDataString = localStorage.getItem('@user');

	// Convertir la cadena JSON a un objeto JavaScript
	let userData = JSON.parse(userDataString as any);
	return (
		<header>
			<nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white">
				<div>
					<a href="#">Cards</a>
				</div>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					id="menu-button"
					className="h-6 w-6 cursor-pointer md:hidden block"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>

				<div
					className="hidden w-full md:flex md:items-center md:w-auto"
					id="menu">
					<ul className="pt-4 text-base text-gray-700 md:flex md:justify-between  md:pt-0">
						{links.map((link, index) => {
							return (
								<li key={index}>
									<Link
										key={link.name}
										href={link.href}
										onClick={link.handleClick}
										className="md:p-4 py-2 block hover:text-purple-400">
										{link.name}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default NavBar;
