'use client';
import { Card, Tabs } from '@/components';
import { useUserDataStore } from '@/store/userDataStore';
import React, { useEffect } from 'react';

export default function HomePage() {
	// Obtén la función 'addData' y 'stateData' del store

	const { fetchData, cardConsumed } = useUserDataStore((state) => state);
	useEffect(() => {
		fetchData('1');
	}, []); // Asegúrate de incluir 'addDataToStore' como dependencia

	console.log(cardConsumed);

	return (
		<>
			<div className="flex justify-center">
				<h1 className="font-bold m-10">TARJETAS</h1>
			</div>
			{/* <Tabs /> */}
			<div className="flex gap-10 justify-center items-center flex-wrap ">
				{cardConsumed.map((dataUser: any, index) => {
					let match = dataUser.plan.match(/,\s*(\d+)/);
					let numGB = Number(match[1]);
					console.log(dataUser.consumption);

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
							planGB={numGB}
						/>
					);
				})}
			</div>
		</>
	);
}
