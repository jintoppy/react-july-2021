import { Component } from 'react';

import  A from './MyButton';
import UserDetails from './UserDetails';
import TotalDisplay from './TotalDisplay';

class App extends Component {
  componentDidMount(){
    console.log('inside mount of App')
  }
  render(){
    return (
      <div className="App">
        <A text="hello" />
        <A text="hi" />
        <UserDetails />
        <TotalDisplay />
      </div>
    );
  }
  
}

export default App;
