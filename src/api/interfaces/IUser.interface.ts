// interfaces.js

module.exports = {
	User: {
		id: Number,
		name: String,
		email: String,
		password: String,
	},
	UserData: {
		id: Number,
		status: String,
		dateStart: String,
		dateEnd: String || null,
		consumption: { totalConsumption: Number } || null,
		flag: String,
		country: String,
		plan: String,
	},
};
