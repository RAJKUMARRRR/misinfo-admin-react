import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://misinfo.herokuapp.com',
    //baseURL: 'http://localhost:3001',
    timeout: 200000,
    headers: { 'user-key': '5293bfca59e082527f277bd12fb5b535' }
  });

  axiosInstance.interceptors.request.use((req)=>{
      console.log("Request:",req);
      return req;
  },(err)=>{
    console.log("RequestError:",err);
    return Promise.reject(err);
  });

  axiosInstance.interceptors.response.use((res)=>{
    console.log("Response:",res);
    return res;
  },(err)=>{
      console.log("ResponseError:",err);
      return Promise.reject(err);
  });

export default axiosInstance;