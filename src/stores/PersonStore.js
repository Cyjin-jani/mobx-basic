import { observable, makeObservable, computed } from 'mobx';

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
}
