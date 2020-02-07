import axios from "axios";
export const _axios = axios.create({
  baseURL: "http://localhost:9000",
});

export const axiosGetRequest = async ({url, store}) => {
  store.loading = true;
  try{
    const request =  await _axios.get(url);
    store.loading = false;
    store.data = request.data;
    return request;
  }catch (e) {
    return Promise.reject();
  }
};
export const baseState = () =>{
  return {
    data: null,
    loading: false,
    errorMessage: null
  };
};