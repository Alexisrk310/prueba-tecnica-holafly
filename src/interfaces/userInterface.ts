export interface userAuth {
	name?: string | undefined;
	email: string | undefined;
	password: string | undefined;
}

export interface userData {
	status: string;
	dateStart: string;
	dateEnd: string;
	consumption: null | any; // Puedes ajustar el tipo según lo que esperes para consumption
	flag: string;
	country: string;
	plan: string;
}
