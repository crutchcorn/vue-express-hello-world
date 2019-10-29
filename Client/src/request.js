const axios = require('axios');

const serverBase = 'http://localhost:3000';

export const getHello = () => {
	return axios.get(serverBase + '/');
};

export const getGoodbye = () => {
    return axios.get(serverBase + "/bye");
}
