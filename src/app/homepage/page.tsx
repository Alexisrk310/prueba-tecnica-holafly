'use client';
import React, { useEffect } from 'react';
import { Card, Tabs } from '@/components';
import { useUserDataStore } from '@/store/userDataStore';

export default function HomePage() {
	const { fetchData, cardConsumed } = useUserDataStore((state) => state);

	useEffect(() => {
		fetchData('1');
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
			<div key={index}>
				{dataForStatus.map((dataUser, dataIndex: number) => (
					<div key={dataIndex}>
						<Card
							status={dataUser.status}
							dateStart={dataUser.dateStart}
							dateEnd={dataUser.dateEnd}
							flag={dataUser.flag}
							country={dataUser.country}
							plan={dataUser.plan}
							consumption={dataUser.consumption}
							// ...otros props
						/>
					</div>
				))}
			</div>
		);
	});

	return (
		<>
			<div className="flex w-screen justify-center">
				<h1 className="font-bold m-10">TARJETAS</h1>
			</div>

			<Tabs tabs={tabsInfo}>{tabsContent}</Tabs>
		</>
	);
}

function groupBy<T>(array: T[], key: keyof T): Record<string, T[]> {
	return array.reduce((result, item) => {
		(result[item[key] as any] = result[item[key] as any] || []).push(item);
		return result;
	}, {} as Record<string, T[]>);
}
