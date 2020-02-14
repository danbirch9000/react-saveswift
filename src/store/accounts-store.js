import { observable, computed, action, decorate, runInAction } from "mobx";
import {baseState, axiosRequest} from "../config/axios-utils";

export default class AccountsStore {
    userId = "000000001";

    //state
    accounts = baseState();
    goals = baseState();
    actions = {
      updateAccount: baseState(),
      deleteAccount: baseState(),
      createAccount: baseState()
    };

    //actions
    GET_ACCOUNTS(){
      return axiosRequest({
        url: `/accounts/${this.userId}.json`,
        store: this.accounts,
        method: "get",
        error: "Error getting user accounts"
      }, runInAction);
    }
    CREATE_ACCOUNT(payload){
      return axiosRequest({
        url: `/accounts/${this.userId}.json`,
        store: this.actions.createAccount,
        method: "post",
        data: payload,
        error: "Error creating account"
      }, runInAction);
    }

    GET_GOALS(){
      return axiosRequest({
        url: `/goals/${this.userId}.json`,
        store: this.goals,
        method: "get",
        error: "Error getting goals for user"
      }, runInAction);
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
  goals: observable,
  actions: observable,
  accountsForUser: computed,
  GET_ACCOUNTS: action,
  GET_GOALS: action
});