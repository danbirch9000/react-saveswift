import { observable, computed, action, decorate } from "mobx";
import {_axios} from "../config/axios-utils";

export const axiosGetRequest = async ({url, store}) => {
    store.loading = true;
    try{
        const request =  await _axios.get(url);
        store.loading = false;
        store.data = request.data;
        return request;
    }catch (e) {
        return Promise.reject()
    }

}

export default class AccountsStore {
    //state
    accounts = {
        data: null,
        loading: false,
        errorMessage: null
    };

    //actions
    GET_ACCOUNTS(){
        return axiosGetRequest({
            url: "/accounts/auth0%7C5b941aa872d4bb47f9a32abd.json",
            store: this.accounts
        });
    }

    //computed
    get accountsForUser() {
        if(!this.accounts.data) return [];

        const data = Object.keys(this.accounts.data).map(o => {
            return {
                ...this.accounts.data[o],
                id: o
            };
        }) ;

        return data;

    }
}
decorate(AccountsStore, {
    accounts: observable,
    accountsForUser: computed,
    GET_ACCOUNTS: action
})