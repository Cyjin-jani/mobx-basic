import logo from './logo.svg';
import './App.css';

import { inject, observer } from 'mobx-react';
import React, { useContext } from 'react';
import PersonContext from './contexts/PersonContext';
import { action, computed, runInAction } from 'mobx';
import autobind from 'autobind-decorator';
// import autobind from 'autobind-decorator';

// // 함수형
// function App({ personStore }) {
//   console.log('rendered');
//   // const personStore = useContext(PersonContext);

//   // computed를 함수형으로 사용 (decorator 사용안함)
//   const age10 = computed(() => {
//     return Math.floor(personStore.age / 10) * 10;
//   }).get();

//   function click() {
//     // personStore.plusAge();

//     // observable 항목들의 변경을 위해 action을 활용...
//     // action 활용 방법 1
//     // setTimeout(
//     //   action(() => {
//     //     personStore.age = 45;
//     //     personStore.name = 'wwww';
//     //   }),
//     //   500
//     // );

//     // action 활용 방법 2
//     // setTimeout(() => {
//     //   runInAction(() => {
//     //     personStore.age = 45;
//     //     personStore.name = 'wwww';
//     //   });
//     // }, 500);

//     // action 활용 방법 3
//     setTimeout(() => {
//       personStore.testAction();
//     }, 500);
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         {/* class형 computed 사용 */}
//         {/* <p> 나이: {personStore.age10} </p> */}
//         {/* 함수형 computed */}
//         {/* <p> 나이: {age10} </p> */}
//         <p>
//           {personStore.age}, {personStore.name}
//         </p>
//         <p>
//           <button onClick={click}>plus</button>
//         </p>
//       </header>
//     </div>
//   );
// }

// export default inject('personStore')(observer(App));

// class 형
@inject('personStore')
@observer
class App extends React.Component {
  // static contextType = PersonContext;

  render() {
    // const personStore = this.context;
    const personStore = this.props.personStore;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <p> 나이: {personStore.age} </p> */}
          <p> 나이: {personStore.age10} </p>
          <p>
            <button onClick={this.click}>plus</button>
          </p>
        </header>
      </div>
    );
  }
  @autobind
  click() {
    // const personStore = this.context;
    const personStore = this.props.personStore;
    personStore.plusAge();
  }
}

export default App;
