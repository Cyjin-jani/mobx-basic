import { action, flow, makeObservable, observable, runInAction } from 'mobx';
import axios from 'axios';

export default class UserStore {
  @observable
  state = {
    users: [],
    loading: false,
    error: null,
  };

  constructor() {
    makeObservable(this);
  }

  @action
  pending() {
    this.state.loading = true;
    this.state.error = null;
  }

  @action
  success(users) {
    this.state.users = users;
    this.state.loading = false;
    this.state.error = null;
  }

  @action
  fail(error) {
    this.state.loading = false;
    this.state.error = error;
  }

  async getUsers() {
    try {
      runInAction(() => {
        this.state.loading = true;
        this.state.error = null;
      });

      const response = await axios.get('https://api.github.com/users');

      runInAction(() => {
        this.state.users = response.data;
        this.state.loading = false;
        this.state.error = null;
      });
    } catch (err) {
      runInAction(() => {
        this.state.loading = false;
        this.state.error = err;
      });
    }
  }

  @flow
  *getUsersFlow() {
    try {
      // flow를 사용하면 runInAction을 사용하지 않아도 된다.
      // flow는 mobx의 비동기 통신 함수용...
      this.state.loading = true;
      this.state.error = null;

      const response = yield axios.get('https://api.github.com/users');

      this.state.users = response.data;
      this.state.loading = false;
      this.state.error = null;
    } catch (err) {
      this.state.loading = false;
      this.state.error = err;
    }
  }
}
