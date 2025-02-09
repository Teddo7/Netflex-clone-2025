import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://api.themoviedb.org/3', // Replace with your API base URL
});

export default instance;
