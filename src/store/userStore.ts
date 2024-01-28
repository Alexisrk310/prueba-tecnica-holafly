import { IUserStore } from '@/interfaces/userProfile.interface';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const userStore = create(
	persist<IUserStore>(
		(set) => ({
			profile: {
				name: '',
				id: '',
			},
			setProfile: (value) =>
				set(() => ({
					profile: {
						name: value.name,
						id: value.id,
					},
				})),
			auth: {
				token: '',
			},
			setAuth: (value) => {
				set(() => ({
					auth: {
						token: value.token,
					},
				}));
			},
		}),
		{ name: 'user' }
	)
);
