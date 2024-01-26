import { create } from 'zustand';
import { UserData, UserDataStore } from '@/interfaces/userInterface';

export const useUserDataStore = create<UserDataStore>((set) => ({
	stateData: [],
	addData: (value: UserData) =>
		set((state) => ({
			stateData: [value],
		})),
}));
