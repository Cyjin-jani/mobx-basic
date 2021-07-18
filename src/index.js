import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PersonContext from './contexts/PersonContext';
import PersonStore from './stores/PersonStore';
import { Provider } from 'mobx-react';

// const isLogin = observable(true);

// // 얘는 js 표준 내장객체인 proxy를 활용함...
// const person = observable({
//   name: 'Mike',
//   age: 30,
// });

const personStore = new PersonStore();

// setInterval(() => {
//   personStore.age++;
// }, 1000);

// observable이라고 하는 것을 autorun이라고 하는 것에서 변경 되었을 때 확인하는 관찰자 역할을 함.
// observable로 감싼 것의 상태나 값이 바뀌는 경우, 아래 autorun이 실행 됨.
// autorun(() => {
//   console.log('isLogin', isLogin.get());
//   console.log('person', person.name, person.age);

//   console.log(personStore.age);
// });

// isLogin.set(false);
// person.age = 40;

// personStore.age = 50;

ReactDOM.render(
  <React.StrictMode>
    {/* <PersonContext.Provider value={personStore}> */}
    <Provider personStore={personStore}>
      <App />
    </Provider>
    {/* </PersonContext.Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
