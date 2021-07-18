import { observable, makeObservable } from 'mobx';

export default class PersonStore {
  @observable
  name = 'Mark';

  @observable
  age = 39;

  constructor() {
    makeObservable(this);
  }

  plusAge() {
    this.age++;
  }
}
