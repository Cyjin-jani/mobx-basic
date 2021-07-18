import logo from './logo.svg';
import './App.css';

import { observer } from 'mobx-react';
import React, { useContext } from 'react';
import PersonContext from './contexts/PersonContext';
import autobind from 'autobind-decorator';

@observer
class App extends React.Component {
  static contextType = PersonContext;

  render() {
    const personStore = this.context;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p> 나이: {personStore.age} </p>
          <p>
            <button onClick={this.click}>plus</button>
          </p>
        </header>
      </div>
    );
  }
  @autobind
  click() {
    const personStore = this.context;
    personStore.plusAge();
  }
}

// 함수형
// function App() {
//   const personStore = useContext(PersonContext);

//   function click() {
//     personStore.plusAge();
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p> 나이: {personStore.age} </p>
//         <p>
//           <button onClick={click}>plus</button>
//         </p>
//       </header>
//     </div>
//   );
// }

// export default observer(App);

export default App;
