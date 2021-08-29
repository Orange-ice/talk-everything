import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// 创建 axios 引用
const service = axios.create({
    baseURL: 'http://121.199.61.109/', // url = base url + request url
    withCredentials: true, // send cookies when cross-domain requests
    timeout: 60000 // request timeout
});

// 请求拦截
service.interceptors.request.use(function (config: AxiosRequestConfig) {

    // if (getToken()) {
    //     config.headers['Authorization'] = 'Bearer ' + getToken()
    // }

    return config;
}, function (error) {
    return Promise.reject(error);
});

// 响应拦截
service.interceptors.response.use(
    (response: AxiosResponse) => {
        return Promise.resolve(response.data);
    },
    error => {
        const res = error.response.data;
        if (error.response.status >= 500) {
            // message.error('服务器繁忙暂时无法响应服务，请稍候。')
        }
        if (error.response.status >= 400 && error.response.status < 500) {
            if (res.msg !== undefined && res.msg !== null && res.msg !== '') {
                // message.error(res.msg)
            }
        }
        return Promise.reject(error);
    }
);

const fetcher = <T extends object> (url: string, method: 'post' | 'get', data?: T) => {
    return service({
        url,
        method,
        ...data
    });
};

export default fetcher;

