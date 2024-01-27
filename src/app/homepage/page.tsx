'use client';
import React, { useEffect } from 'react';
import { Card, Tabs } from '@/components';
import { useUserDataStore } from '@/store/userDataStore';

export default function HomePage() {
	const { fetchData, cardConsumed } = useUserDataStore((state) => state);

	useEffect(() => {
		let userDataString = localStorage.getItem('@user');

		// Convertir la cadena JSON a un objeto JavaScript
		let userData = JSON.parse(userDataString as any);
		fetchData(String(userData?.id));
	}, [fetchData]);

	const tabsInfo = [
		{ label: 'Active', panelId: 'panel-1' },
		{ label: 'Pending', panelId: 'panel-2' },
		{ label: 'Expired', panelId: 'panel-3' },
	];

	const groupedByStatus: Record<string, any[]> = groupBy(
		cardConsumed,
		'status'
	);

	const tabsContent = tabsInfo.map((tab, index) => {
		const dataForStatus = groupedByStatus[tab.label] || [];

		return (
			<div
				key={index}
				className="flex justify-center items-center flex-wrap gap-4">
				{dataForStatus.map((dataUser, dataIndex: number) => {
					let match = dataUser.plan.match(/,\s*(\d+)/);
					let numGB = Number(match[1]);
					console.log(dataUser.consumption);
					return (
						<div key={dataIndex}>
							<Card
								status={dataUser.status}
								dateStart={dataUser.dateStart}
								dateEnd={dataUser.dateEnd}
								flag={dataUser.flag}
								country={dataUser.country}
								plan={dataUser.plan}
								consumption={dataUser.consumption}
								planGB={numGB}
							/>
						</div>
					);
				})}
			</div>
		);
	});

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
				{/* falta poner darkmode */}
				<Tabs tabs={tabsInfo}>{tabsContent}</Tabs>
			</div>
			<div className="w-40 h-40 absolute bg-purple-300 dark:bg-slate-700 rounded-full top-40 right-12 hidden md:block animate-fall"></div>
			<div className="w-20 h-40 absolute bg-purple-300 dark:bg-slate-700 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block animate-fall"></div>
		</>
	);
}

function groupBy<T>(array: T[], key: keyof T): Record<string, T[]> {
	return array.reduce((result, item) => {
		(result[item[key] as any] = result[item[key] as any] || []).push(item);
		return result;
	}, {} as Record<string, T[]>);
}
