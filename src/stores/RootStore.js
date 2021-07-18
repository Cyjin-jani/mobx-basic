import PersonStore from './PersonStore';
import TodoStore from './TodoStore';
import UserStore from './UserStore';

export default class RootStore {
  constructor() {
    // 각 스토어에서 서로 다른 스토어를 참조하려면 rootstore의 인스턴스를 보내주어야 하므로 this를 넣어줌..
    this.todoStore = new TodoStore(this);
    this.personStore = new PersonStore(this);
    this.userStore = new UserStore(this);
  }
}
