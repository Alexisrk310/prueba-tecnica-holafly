'use client';
import React, { useEffect, useState, ReactNode } from 'react';
import './Tabs.css';

interface TabProps {
	label: string;
	panelId: string;
}

interface TabsProps {
	tabs: TabProps[];
	children: ReactNode[];
}

const Tab: React.FC<TabProps> = ({ label, panelId }) => (
	<button
		role="tab"
		aria-selected={false}
		aria-controls={panelId}
		tabIndex={-1}
		className="relative block h-10 px-6 tab rounded-full">
		<span className="text-gray-800">{label}</span>
	</button>
);

const TabPanel: React.FC<any> = ({ id, children }) => (
	<div
		role="tabpanel"
		id={id}
		className="absolute top-0 invisible opacity-0 tab-panel p-6 transition duration-300">
		{children}
	</div>
);

const Tabs: React.FC<TabsProps> = ({ tabs, children }) => {
	const [activeTab, setActiveTab] = useState(0);

	useEffect(() => {
		const tabsElements = document.querySelectorAll(
			'.tab'
		) as NodeListOf<HTMLButtonElement>;
		const indicator = document.querySelector('.indicator') as HTMLElement;
		const panels = document.querySelectorAll('.tab-panel');

		indicator.style.width =
			tabsElements[0].getBoundingClientRect().width + 'px';
		indicator.style.left =
			tabsElements[0].getBoundingClientRect().left -
			tabsElements[0].parentElement!.getBoundingClientRect().left +
			'px';

		tabsElements.forEach((tab, index) => {
			tab.addEventListener('click', () => {
				const tabTarget = tab.getAttribute('aria-controls');

				indicator.style.width = tab.getBoundingClientRect().width + 'px';
				indicator.style.left =
					tab.getBoundingClientRect().left -
					tab.parentElement!.getBoundingClientRect().left +
					'px';

				panels.forEach((panel) => {
					const panelId = panel.getAttribute('id');
					if (tabTarget === panelId) {
						panel.classList.remove('invisible', 'opacity-0');
						panel.classList.add('visible', 'opacity-100');
						setActiveTab(index);
					} else {
						panel.classList.add('invisible', 'opacity-0');
					}
				});
			});
		});
	}, []);

	return (
		<div className="flex justify-center items-center">
			<div className="max-w-full  sm:px-0">
				<div className="sm:w-7/12">
					<div
						role="tablist"
						aria-label="tabs"
						className="relative w-max mx-auto h-12 grid grid-cols-3 items-center px-[3px] rounded-full bg-gray-900/20 overflow-hidden shadow-2xl shadow-900/20 transition">
						<div className="absolute indicator h-11 my-auto top-0 bottom-0 left-0 rounded-full bg-white shadow-md transition"></div>
						{tabs.map((tab, index) => (
							<Tab key={index} label={tab.label} panelId={tab.panelId} />
						))}
					</div>
					<div className="mt-6 relative rounded-3xl bg-purple-50">
						{React.Children.map(children, (child, index) => (
							<TabPanel key={index} id={tabs[index].panelId}>
								{child}
							</TabPanel>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tabs;
