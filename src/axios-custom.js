/* eslint no-console: ["error", { allow: ["log"] }] */
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://quiz-3c2c7.firebaseio.com'
});

instance.defaults.headers.common['SOMETHING'] = 'somethibng';

instance.interceptors.request.use(config => {
    console.log('custom: ' + config);
    return config;
});

export default instance;
