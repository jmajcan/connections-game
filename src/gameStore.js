import { create } from 'zustand';

const gameStore = (set, get) => ({
	/* states */
	gameName: 'default',
	gameQuestions: [],
	gameError: {
		errorCode: null,
		errorMessage: null
	},
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
	// setGame: async (id) => {
	// 	const response = await fetch(`http://localhost:5050/games/${id}`);
	// 	if (!response.ok) {
	// 		set({
	// 			gameError: {
	// 				errorCode: '',
	// 				errorMessage: ''
	// 			}
	// 		});
	// 		const message = `An error has occurred: ${response.statusText}`;
	// 		console.error(message);
	// 		return;
	// 	}
	// 	set({
	// 		gameName: name,
	// 		gameQuestions: questions,
	// 	});
	// },
	reset: () => {
		set({
			gameName: 'default',
			gameQuestions: [],
		});
	}
	/* actions end */
});

const useGameStore = create(gameStore);

export default useGameStore;