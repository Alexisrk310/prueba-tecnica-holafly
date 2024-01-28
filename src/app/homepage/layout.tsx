import { NavBar } from '@/components';

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="antialiased bg-gradient-to-r from-pink-300 dark:from-slate-900 via-purple-300 dark:via-slate-600 to-indigo-400 dark:to-black h-full">
			<NavBar />
			{children}
		</div>
	);
}
