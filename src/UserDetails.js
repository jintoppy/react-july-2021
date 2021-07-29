import { Component } from 'react';


class UserDetails extends Component {
    state = {
        name: 'hello',
        age: 10
    }
    onBtnClick = (e) => {
        console.log(e);
        this.setState({
            name: 'changed'
        });
    }
    onInputChange = (e) => {
        console.log(e.target.value);
        this.setState({
            name: e.target.value
        });
    }
    render(){
        // console.log('inside render');
        return (<div>
            <h1>User details</h1>
            <p>{this.state.name}</p>
            <p>{this.state.age}</p>
            <input type="number" onChange={this.onInputChange}/>
            <button onClick={this.onBtnClick}>Click me</button>
            </div>);
    }
    
};

export default UserDetails;

//state