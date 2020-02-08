import { observable, computed, action, decorate } from "mobx";
import {baseState, axiosGetRequest} from "../config/axios-utils";

export default class AccountsStore {
    //state
    accounts = baseState();

    //actions
    GET_ACCOUNTS(){
      console.log("GET_ACCOUNTS");
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
          history: Object.keys(this.accounts.data[o].history).map(h => {
            return {
              ...this.accounts.data[o].history[h],
              id: h
            };
          }),
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
});