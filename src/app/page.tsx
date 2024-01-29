'use client';
import { useRouter } from 'next/navigation';
import { useAuthForm } from '@/hooks/useAuthForm';
import { FormEvent } from 'react';
import { loginAuth } from '@/services/post/loginAuth';
import { userStore } from '@/store/userStore';
import { IUserStore } from '@/interfaces/userProfile.interface';
export default function Home() {
	const { setProfile, setAuth } = userStore((state: IUserStore) => state);
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
				setProfile({
					name: userData.name,
					id: userData.userId,
				});
				setAuth({
					token: userData.token,
				});
				router.push('/homepage');
			}
		} catch (error: any) {
			console.error('Error al iniciar sesión:', error.message);
		}
	};

	return (
		<div className="min-h-screen bg-purple-400 flex justify-center items-center">
			<div className="absolute w-60 h-60 rounded-xl bg-purple-300 -top-5 -left-16 z-0 transform rotate-45 hidden sm:block"></div>
			<div className="absolute w-48 h-48 rounded-xl bg-purple-300 -bottom-6 -right-10 transform rotate-12 hidden sm:block"></div>
			<form
				onSubmit={handleSubmit}
				className="py-8 px-4 bg-white rounded-2xl shadow-xl z-20 w-full sm:w-96">
				<div>
					<h1 className="text-2xl font-bold text-center mb-4 cursor-pointer">
						Welcome
					</h1>
					<p className="w-full text-center text-sm mb-6 font-semibold text-gray-700 tracking-wide cursor-pointer">
						Sign in to access all our services at no cost!
					</p>
				</div>
				<div className="space-y-4">
					<input
						type="text"
						className="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500"
						id="email"
						placeholder="correo@example.com"
						name="email"
						value={formAuth.email}
						onChange={handleChange}
					/>
					<input
						type="password"
						className="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500"
						id="password"
						name="password"
						placeholder="********"
						value={formAuth.password}
						onChange={handleChange}
					/>
				</div>
				<div className="text-center mt-4">
					<button className="w-full py-2 text-lg text-white bg-purple-400 rounded-lg hover:bg-purple-500 transition-all">
						Login
					</button>
				</div>
			</form>
			<div className="w-24 h-24 absolute bg-purple-300 rounded-full top-0 right-4 hidden sm:block"></div>
			<div className="w-12 h-24 absolute bg-purple-300 rounded-full bottom-8 left-4 transform rotate-45 hidden sm:block"></div>
		</div>
	);
}
