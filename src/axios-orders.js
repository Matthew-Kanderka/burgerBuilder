import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-22e9b.firebaseio.com/'
});

export default instance;