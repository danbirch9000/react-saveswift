import { observable, computed, action, decorate } from "mobx";
import {_axios} from "../config/axios-utils";
export default class AccountsStore {
    //state
    accounts = {
        data: null,
        loading: false,
        errorMessage: null
    };

    //actions
    async GET_ACCOUNTS(){
        this.accounts.loading = true;
        const search = await _axios.get("/accounts/auth0%7C5b941aa872d4bb47f9a32abd.json");
        this.accounts.loading = false;
        this.accounts.data = Object.keys(search.data).map(o => {
            return {
                ...search.data[o],
                id: o
            };
        }) ;
    }

    //computed
    get totalAccounts() {
        return this.accounts.data?.length;
    }
}
decorate(AccountsStore, {
    accounts: observable,
    totalAccounts: computed,
    GET_ACCOUNTS: action
})