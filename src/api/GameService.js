import axios from 'axios';

const BASE_URL = 'http://localhost:5050/games/';

export async function fetchGames() {
	const response = await axios.get(`${BASE_URL}`)
		.then((res) => {
			return res;
		}).catch((err) => {
			throw new Error(err.message, { statusCode: err.status, errorCode: err.code });
		});

	return response.data;
};

export function fetchGame(id) {
	const response = axios.get(`${BASE_URL}/${id}`)
		.then((res) => {
			return res;
		}).catch((err) => {
			throw new Error(err.message, { statusCode: err.status, errorCode: err.code });
		});

	return response.data;
};