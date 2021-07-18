import logo from './logo.svg';
import './App.css';

import { observer } from 'mobx-react';
import React, { useContext } from 'react';
import PersonContext from './contexts/PersonContext';
import { computed } from 'mobx';
// import autobind from 'autobind-decorator';

// 함수형
function App() {
  console.log('rendered');
  const personStore = useContext(PersonContext);

  // computed를 함수형으로 사용 (decorator 사용안함)
  const age10 = computed(() => {
    return Math.floor(personStore.age / 10) * 10;
  }).get();

  function click() {
    personStore.plusAge();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* class형 computed 사용 */}
        {/* <p> 나이: {personStore.age10} </p> */}
        {/* 함수형 computed */}
        <p> 나이: {age10} </p>
        <p>
          <button onClick={click}>plus</button>
        </p>
      </header>
    </div>
  );
}

export default observer(App);

// class 형
// @observer
// class App extends React.Component {
//   static contextType = PersonContext;

//   render() {
//     const personStore = this.context;

//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p> 나이: {personStore.age} </p>
//           <p>
//             <button onClick={this.click}>plus</button>
//           </p>
//         </header>
//       </div>
//     );
//   }
//   @autobind
//   click() {
//     const personStore = this.context;
//     personStore.plusAge();
//   }
// }

// export default App;
