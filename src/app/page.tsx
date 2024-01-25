import { Card } from '@/components/Card';
import Image from 'next/image';

export default function Home() {
	return (
		<div className="flex items-center justify-center h-screen">
			<div className="bg-blue-500 p-8 rounded-lg shadow-lg">
				<h2 className="text-2xl font-bold text-white mb-4">Iniciar Sesión</h2>
				<form>
					<div className="mb-4">
						<label htmlFor="email" className="text-white block mb-2">
							Correo Electrónico
						</label>
						<input
							type="email"
							className="w-full px-3 py-2 rounded-md bg-gray-100 focus:outline-none focus:ring focus:border-blue-300"
							id="email"
							placeholder="correo@example.com"
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="password" className="text-white block mb-2">
							Contraseña
						</label>
						<input
							type="password"
							className="w-full px-3 py-2 rounded-md bg-gray-100 focus:outline-none focus:ring focus:border-blue-300"
							id="password"
							placeholder="********"
						/>
					</div>
					<div className="flex items-center justify-center">
						<button
							type="submit"
							className="bg-white w-full text-blue-500 py-2 px-4 rounded-md">
							Iniciar Sesión
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
