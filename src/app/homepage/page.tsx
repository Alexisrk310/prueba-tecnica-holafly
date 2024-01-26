'use client';
import { Card } from '@/components';
import { CardProps } from '@/interfaces/cardProps';
import { CardConsumed } from '@/interfaces/userInterface';

import { getUserData } from '@/services/get/getUserData';
import { useUserDataStore } from '@/store/userDataStore';
import React, { useEffect } from 'react';

export default function HomePage() {
	// Obtén la función 'addData' y 'stateData' del store

	const { fetchData, cardConsumed } = useUserDataStore((state) => state);
	useEffect(() => {
		fetchData('1');
	}, []); // Asegúrate de incluir 'addDataToStore' como dependencia

	// Puedes acceder a 'stateData' fuera de useEffect
	// console.log(stateData[0].country);
	// console.log(stateData);
	// console.log(stateData.pop());
	console.log(cardConsumed);

	return (
		<>
			<div className="flex justify-center">
				<h1 className="font-bold m-10">TARJETAS</h1>
			</div>

			<div className="flex gap-10 justify-center items-center flex-wrap ">
				{cardConsumed.map((dataUser: any, index) => {
					return (
						<Card
							key={index}
							status={dataUser.status}
							dateStart={dataUser.dateStart}
							dateEnd={dataUser.dateEnd}
							flag={dataUser.flag}
							country={dataUser.country}
							plan={dataUser.plan}
							consumption={dataUser.consumption}
							// totalConsumption={dataUser.totalConsumption}
						/>
					);
				})}
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
