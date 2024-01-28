'use client';
import React, { useEffect, useState } from 'react';
import { Card, Tabs } from '@/components';
import { useUserDataStore } from '@/store/userDataStore';
import { userStore } from '@/store/userStore';
import { IUserStore } from '@/interfaces/userProfile.interface';

export default function HomePage() {
	const { fetchData, cardConsumed } = useUserDataStore((state) => state);
	const { profile: profil } = userStore((state: IUserStore) => state);

	useEffect(() => {
		try {
			let userDataString = localStorage.getItem('user');

			if (userDataString) {
				let {
					state: { profile },
				} = JSON.parse(userDataString);
				fetchData(profile.id || profil.id);
			} else {
				console.error('No se encontraron datos de usuario en localStorage.');
			}
		} catch (error) {
			console.error('Error al procesar los datos del usuario:', error);
		}
	}, [fetchData]);

	const tabsData = [
		{ label: 'Active', panelId: 'panel-activo', status: 'Active' },
		{ label: 'Pending', panelId: 'panel-pendiente', status: 'Pending' },
		{ label: 'Expired', panelId: 'panel-caducado', status: 'Expired' },
	];

	const [activeTab, setActiveTab] = useState('Active');

	const handleTabChange = (status: string) => {
		setActiveTab(status);
	};
	console.log(cardConsumed);

	return (
		<>
			<div className="absolute w-60 h-60 rounded-xl bg-purple-300 dark:bg-slate-700 top-40 -left-16 z-0 transform rotate-45 hidden md:block animate-fall"></div>
			<div className="absolute w-48 h-48 rounded-xl bg-purple-300 dark:bg-slate-700 -bottom-6 -right-10 transform rotate-12 hidden md:block animate-fall"></div>
			<div className="flex w-screen justify-center">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Holafly-logo.svg/2560px-Holafly-logo.svg.png"
					alt="holafly"
					width={200}
					height={100}
					className="m-5"
				/>
			</div>
			<div className="animate-fall">
				<Tabs
					tabs={tabsData.map((tab) => ({
						...tab,
						onChangeTab: handleTabChange,
					}))}
				/>
			</div>

			<div className="flex justify-center m-5 flex-wrap gap-4">
				{cardConsumed
					.filter((dataUser) => dataUser.status === activeTab)
					.map((dataUser, index) => {
						console.log(dataUser);
						let match = dataUser.plan.match(/,\s*(\d+)/);
						let numGB: number | undefined = match
							? Number(match[1])
							: undefined;

						return (
							<Card
								key={index}
								status={dataUser.status}
								dateStart={dataUser.dateStart}
								dateEnd={dataUser.dateEnd}
								flag={dataUser.flag}
								country={dataUser.country}
								plan={dataUser.plan}
								consumption={dataUser.consumption?.totalConsumption || 0} // Se utiliza el operador de fusión nula para manejar el valor nulo o indefinido
								planGB={numGB}
							/>
						);
					})}
			</div>
			<div className="w-40 h-40 absolute bg-purple-300 dark:bg-slate-700 rounded-full top-40 right-12 hidden md:block animate-fall"></div>
			<div className="w-20 h-40 absolute bg-purple-300 dark:bg-slate-700 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block animate-fall"></div>
		</>
	);
}
