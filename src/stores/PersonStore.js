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

  constructor() {
    makeObservable(this);
  }

  plusAge() {
    this.age++;
  }

  @action
  testAction() {
    this.age = 45;
    this.name = 'wwww';
  }
}
