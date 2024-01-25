'use client';
import { Card } from '@/components';
import React from 'react';
import { useRouter } from 'next/router';

export default function page() {
	const router = useRouter();
	fetch('https://jsonplaceholder.typicode.com/todos/1')
		.then((response) => response.json())
		.then((data) => {
			console.log('Datos obtenidos:', data);
			// Aquí puedes manejar los datos como desees
		})
		.catch((error) => {
			console.error('Error al obtener datos:', error);
		});
	return (
		<>
			<div className="flex justify-center">
				<h1 className="font-bold m-10">TARJETAS</h1>
			</div>
			<button onClick={() => router.push('/')}>CLICK</button>
			<div className="flex gap-10 justify-center items-center flex-wrap ">
				{/* <Card
					typeCard="ACTIVE"
					city="Democratic Republic of Congo"
					plan="10 days plan, 5GB"
					storage="0"
					comsuption="0"
				/>
				<Card typeCard="PENDING" />
				<Card typeCard="EXPIRED" /> */}
			</div>
		</>
	);
}
