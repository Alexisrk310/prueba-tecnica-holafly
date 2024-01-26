'use client';
import { Card } from '@/components';
import { CardProps } from '@/interfaces/cardProps';
import { UserData } from '@/interfaces/userInterface';

import { getUserData } from '@/services/get/getUserData';
import { useUserDataStore } from '@/store/userDataStore';
import React, { useEffect } from 'react';

export default function HomePage() {
	// Obtén la función 'addData' y 'stateData' del store

	const stateData = useUserDataStore((state) => state.stateData);
	const addDataToStore = useUserDataStore((state) => state.addData);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getUserData('1');
				console.log(data);
				// Utiliza 'addData' fuera del contexto async

				addDataToStore(data);
			} catch (error) {
				console.error('Error al obtener datos:', error);
			}
		};

		fetchData();
	}, [addDataToStore]); // Asegúrate de incluir 'addDataToStore' como dependencia

	// Puedes acceder a 'stateData' fuera de useEffect
	// console.log(stateData[0].country);

	return (
		<>
			<div className="flex justify-center">
				<h1 className="font-bold m-10">TARJETAS</h1>
			</div>

			<div className="flex gap-10 justify-center items-center flex-wrap ">
				{stateData.map((dataUser: any, index) => (
					<Card
						key={index}
						// typeCard={dataUser.typeCa	rd}
						status={dataUser.status}
						dateStart={dataUser.dateStart}
						dateEnd={dataUser.dateEnd}
						flag={dataUser.flag}
						country={dataUser.country}
						plan={dataUser.plan}
						consumption={dataUser.consumption}
						// totalConsumption={dataUser.totalConsumption}
					/>
				))}
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
