const instance = axios.create({
    baseURL: "https://ajax.test-danit.com/api/v2/"
})

instance.interceptors.request.use((config) => {
    config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

    return config;
}, error => {
    return Promise.reject(error);
})

export default instance;