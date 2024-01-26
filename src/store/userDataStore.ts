import { create } from 'zustand';
import { UserDataStore } from '@/interfaces/userInterface';
import { getUserData } from '../services/get/getUserData';

export const useUserDataStore = create<UserDataStore>((set) => ({
	cardConsumed: [],
	fetchData: (value) =>
		set((state) => {
			getUserData(value, set);
			return state;
		}),
}));
