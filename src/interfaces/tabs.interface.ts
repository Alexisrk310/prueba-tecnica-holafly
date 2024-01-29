export interface tabsTitle {
	label: string;
	panelId: string;
}

export interface TabProps {
	label: string;
	panelId: string;
	status: string;
	onChangeTab: (status: string) => void;
}

export interface TabsProps {
	tabs: TabProps[];
}
