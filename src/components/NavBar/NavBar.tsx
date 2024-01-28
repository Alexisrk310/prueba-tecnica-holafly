'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Dropdown, ThemeToggle } from '..';
import { userStore } from '@/store/userStore';
import { IUserStore } from '@/interfaces/userProfile.interface';

const NavBar: React.FC = () => {
	
	const [menuOpen, setMenuOpen] = useState(false);
	const { profile } = userStore((state: IUserStore) => state);
	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<header>
			<nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 dark:text-white bg-white dark:bg-gray-950">
				<div>
					<Link href={'/homepage'}>
						<img
							src="https://selectra.es/sites/selectra.es/files/images/logos/holalfy.png"
							alt="logo holafly"
							width={60}
							height={40}
						/>
					</Link>
				</div>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					id="menu-button"
					className={`h-6 w-6 cursor-pointer md:hidden block ${
						menuOpen ? 'open' : ''
					}`}
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					onClick={toggleMenu}>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>

				<div
					className={`w-full md:flex md:items-center mr-5 md:w-auto ${
						menuOpen ? 'block' : 'hidden'
					}`}
					id="menu">
					<ThemeToggle />
					<Dropdown username={profile?.name} />
				</div>
			</nav>
		</header>
	);
};

export default NavBar;
