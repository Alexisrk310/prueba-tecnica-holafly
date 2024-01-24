'use client';
import React from 'react';
import './NavBar.css';

export type NavBarProps = {
	// types...
};

const NavBar: React.FC<NavBarProps> = ({}) => {
	return (
		<nav className="bg-blue-500 p-4 flex justify-between items-center text-white">
			<div className="text-xl font-bold">Mi Sitio</div>
			<div className="flex space-x-4">
				<a href="#" className="hover:underline">
					Inicio
				</a>
				<a href="#" className="hover:underline">
					Productos
				</a>
			</div>
			<div>
				{/* Aquí puedes agregar la lógica del modo oscuro según tus necesidades con Tailwind CSS */}
				{/* Ejemplo: <button className="bg-gray-800 text-white px-3 py-1 rounded">Modo Oscuro</button> */}
			</div>
		</nav>
	);
};

export default NavBar;
