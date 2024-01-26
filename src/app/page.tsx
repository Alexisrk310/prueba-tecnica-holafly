'use client';
import { useRouter } from 'next/navigation';
// import { Card } from '@/components/Card';
// import Image from 'next/image';
import { useAuthForm } from '@/hooks/useAuthForm';
import { FormEvent } from 'react';
import { loginAuth } from '@/services/post/loginAuth';
export default function Home() {
	const router = useRouter();
	const { formAuth, setFormAuth, handleChange } = useAuthForm({
		email: 'holafly@gmail.com',
		password: 'holafly123',
	});
	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setFormAuth({
			email: formAuth.email,
			password: formAuth.password,
		});
		try {
			const userData = await loginAuth(formAuth);
			console.log(userData);

			if (userData.message == 'Login successful') {
				router.push('/homepage');
			}
			// Aquí puedes realizar acciones adicionales después de un inicio de sesión exitoso, si es necesario
		} catch (error: any) {
			// Manejar el error
			console.error('Error al iniciar sesión:', error.message);

			// Puedes mostrar un mensaje de error al usuario o realizar otras acciones necesarias
		}
	};

	return (
		<div className="flex items-center justify-center h-screen">
			<div className="bg-blue-500 p-8 rounded-lg shadow-lg">
				<h2 className="text-2xl font-bold text-white mb-4">Iniciar Sesión</h2>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label htmlFor="email" className="text-white block mb-2">
							Correo Electrónico
						</label>
						<input
							type="email"
							className="w-full px-3 py-2 rounded-md bg-gray-100 focus:outline-none focus:ring focus:border-blue-300"
							id="email"
							placeholder="correo@example.com"
							name="email"
							value={formAuth.email}
							onChange={handleChange}
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
							name="password"
							placeholder="********"
							value={formAuth.password}
							onChange={handleChange}
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
