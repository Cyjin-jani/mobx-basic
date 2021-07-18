import { observable, makeObservable, computed, action } from 'mobx';

export default class PersonStore {
  @observable
  name = 'Mark';

  @observable
  age = 39;

  @computed
  get age10() {
    return Math.floor(this.age / 10) * 10;
  }

  constructor(rootStore) {
    makeObservable(this);

    this.rootStore = rootStore;
  }

  @action
  plusAge() {
    this.age++;
    this.rootStore.todoStore.todos = [];
  }

  @action
  testAction() {
    this.age = 45;
    this.name = 'wwww';
  }
}
