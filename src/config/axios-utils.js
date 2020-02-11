import axios from "axios";
export const _axios = axios.create({
  baseURL: "http://localhost:9000",
});

export const axiosGetRequest = async ({url, store, error}) => {
  store.loading = true;
  store.errorMessage = null;
  try{
    const request = await _axios.get(url);
    store.loading = false;
    store.data = request.data;
    return request;
  }catch (e) {
    store.errorMessage = error;
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