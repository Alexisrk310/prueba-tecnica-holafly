import { SkeletonCard, Tabs } from '@/components';
import React from 'react';

const loading = () => {
	const tabsInfo = [
		{ label: 'Active', panelId: 'panel-1' },
		{ label: 'Pending', panelId: 'panel-2' },
		{ label: 'Expired', panelId: 'panel-3' },
	];

	const tabsContentSkeleton = (
		<div className="flex justify-center items-center flex-wrap gap-4">
			{[...Array(5).keys()].map((_, dataIndex: number) => (
				<div key={dataIndex} className="bg-gray-300 filter grayscale blur-sm">
					<SkeletonCard />
				</div>
			))}
		</div>
	);

	const tabsContentArray = tabsInfo.map((tab, index) => (
		<div key={index}>{tabsContentSkeleton}</div>
	));

	return (
		<>
			<div className="relative h-screen bg-gray-200">
				<div className="absolute w-60 h-60 rounded-xl bg-gray-300 top-40 -left-16 z-0 transform rotate-45 hidden md:block filter grayscale blur-sm"></div>
				<div className="absolute w-48 h-48 rounded-xl bg-gray-300 -bottom-6 -right-10 transform rotate-12 hidden md:block filter grayscale blur-sm"></div>

				<div className="flex w-screen justify-center">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Holafly-logo.svg/2560px-Holafly-logo.svg.png"
						alt="holafly"
						width={200}
						height={100}
						className="m-5 opacity-50 filter grayscale blur-sm"
					/>
				</div>
				<div className="opacity-50 filter grayscale blur-sm">
					{/* <Tabs tabs={tabsInfo}>{tabsContentArray}</Tabs> */}
				</div>

				<div className="w-40 h-40 absolute bg-gray-300 rounded-full top-40 right-12 hidden md:block filter grayscale blur-sm"></div>
				<div className="w-20 h-40 absolute bg-gray-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block filter grayscale blur-sm"></div>
			</div>
		</>
	);
};

export default loading;
