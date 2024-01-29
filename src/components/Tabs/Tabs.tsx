'use client';
import { TabProps, TabsProps } from '@/interfaces/tabs.interface';
import { useEffect, useState } from 'react';

const Tab: React.FC<TabProps> = ({ label, panelId, status, onChangeTab }) => (
	<button
		role="tab"
		aria-selected={status === 'active'}
		aria-controls={panelId}
		tabIndex={status === 'active' ? 0 : -1}
		onClick={() => onChangeTab(status)}
		className={`relative block h-10 px-7 tab rounded-full ${
			status === 'active' ? 'active-tab' : ''
		}`}>
		<span className="text-gray-800 dark:text-gray-200">{label}</span>
	</button>
);

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
	const [activeTab, setActiveTab] = useState(tabs[0]?.status || '');

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
						setActiveTab(tab.getAttribute('data-status') || '');
					} else {
						panel.classList.add('invisible', 'opacity-0');
					}
				});
			});
		});

		tabsElements[0].click();
	}, []);

	return (
		<div className="flex justify-center items-center mt-8">
			<div className="max-w-full">
				<div
					role="tablist"
					aria-label="tabs"
					className="relative w-full h-[50px] grid grid-cols-3 items-center px-[7px] rounded-full bg-gray-900/20 dark:bg-slate-950 overflow-hidden shadow-2xl shadow-900/20 transition">
					<div className="absolute indicator h-9 my-auto top-0 bottom-0 left-0 rounded-full bg-white dark:bg-slate-900 shadow-md transition"></div>
					{tabs.map((tab, index) => (
						<Tab
							key={index}
							label={tab.label}
							panelId={tab.panelId}
							status={tab.status}
							onChangeTab={tab.onChangeTab}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Tabs;
