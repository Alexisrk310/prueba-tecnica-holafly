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
			name: 'Login',
			href: '/',
		},
	];
	return (
		<nav className="bg-blue-500 p-4 flex justify-between items-center text-white">
			<Link href="/" className="text-xl font-bold">
				Prueba-tecnica-HolaFly
			</Link>
			<div className="flex space-x-4">
				{/* <a href="#" className="hover:underline">
					Inicio
				</a>
				<a href="#" className="hover:underline">
					Iniciar sesión
				</a> */}
				{links.map((link) => {
					return (
						<Link key={link.name} href={link.href} className="hover:underline">
							{link.name}
						</Link>
					);
				})}
			</div>
			<div>
				{/* Aquí puedes agregar la lógica del modo oscuro según tus necesidades con Tailwind CSS */}
				{/* Ejemplo: <button className="bg-gray-800 text-white px-3 py-1 rounded">Modo Oscuro</button> */}
			</div>
		</nav>
	);
};

export default NavBar;
