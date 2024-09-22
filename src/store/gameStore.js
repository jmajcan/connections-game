import { create } from 'zustand';
import axios from 'axios';

const initialState = {
	loading: false,
	success: false,
	error: false,
	errorData: null,
};

const url = import.meta.env.VITE_BASE_URL + 'games/';

const gameStore = (set, get) => ({
	/* states */
	...initialState,
	currentGame: null,
	allGames: [],
	/* states end */

	/* actions */
	returnGameName: () => {
		return get().gameName;
	},
	returnQuestions: () => {
		return get().gameQuestions;
	},
	returnGame: () => {
		return {
			gameName: get().gameName,
			gameQuestions: get().gameQuestions
		};
	},
	reset: () => {
		set({
			currentGame: null,
			allGames: [],
			loading: false,
			success: false,
			error: false,
			errorData: null,
		});
	},
	resetCurrentGame: () => {
		set({
			currentGame: null
		});
	},
	fetchAllGames: async () => {
		set({ ...initialState, loading: true });
		try {
			const res = await axios.get(`${url}`);
			console.log(`${url}`, res);
			set({
				...initialState,
				success: true,
				loading: false,
				allGames: res.data,
			});
		} catch (err) {
			set({
				...initialState,
				error: true,
				errorData: err.message,
				loading: false,
			});
		}
	},
	fetchGame: async (id) => {
		set({ ...initialState, loading: true });
		try {
			const res = await axios.get(`${url}${id}`);
			set({
				...initialState,
				success: true,
				loading: false,
				currentGame: res.data,
			});
		} catch (err) {
			set({
				...initialState,
				error: true,
				errorData: err.message,
				loading: false,
			});
		}
	},
	/* actions end */
});

const useGameStore = create(gameStore);

export default useGameStore;