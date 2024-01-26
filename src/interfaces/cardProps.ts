// export type CardProps = {
// 	typeCard?: 'PENDING' | 'ACTIVE' | 'EXPIRED';
// 	id?: string;
// 	city: string;
// 	date?: string;
// 	plan: string;
// 	storage: any;
// 	consumption: string;
// };
// export type CardProps = {
// 	typeCard: 'PENDING' | 'ACTIVE' | 'EXPIRED';
// 	dateStart: string;
// 	dateEnd: string | null;
// 	consumption: { totalConsumption: number } | null;
// 	flag: string; // URL de la imagen del country
// 	country: string;
// 	plan: string;
// 	city: string;
// 	date: string;
// 	storage: any;
// 	key: any;
// };

export type CardProps = {
	status: 'Expired' | 'Pending' | 'Active';
	dateStart: string | any;
	dateEnd: string | null;
	consumption?: { totalComsumption: number } | null | undefined | any;
	flag: string;
	country: string;
	plan: string;
	planGB?: number;
};
