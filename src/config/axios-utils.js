import axios from "axios";
import { runInAction } from "mobx";
export const _axios = axios.create({
  baseURL: "http://localhost:9000",
});


export const axiosRequest = async ({
  url, 
  store, 
  error, 
  method,
  data = null
}) => {
  store.loading = true;
  store.errorMessage = null;
  try{
    const request = await _axios({
      url,
      method,
      data
    });
    runInAction(()=>{
      store.loading = false;
      store.data = request.data;
    });
    return request;
  }catch (e) {
    runInAction(()=>{
      store.errorMessage = error;
    });
    return Promise.reject(error);
  }finally {
    store.loading = false;
  }
};
export const baseState = () =>{
  return {
    data: null,
    loading: false,
    errorMessage: null
  };
};