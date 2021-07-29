import { Component, useState, useEffect } from 'react';
import TotalDetails from './TotalDetails';

//hooks -reusable functions
//built-in hooks, useState, useEffect, useRef

// class TotalDisplay extends Component {
//     state = {
//         total: 0
//     }
//     constructor(props){
//         super(props);
//         console.log('inside constructor - TotalDisplay');
//     }
//     componentDidMount(){
//         console.log('inside mount - TotalDisplay');
//     }    
//     onInputChange = (ev) => {
//         this.setState({
//             total: this.state.total += parseInt(ev.target.value)
//         });
//     }
//     render(){
//         console.log('inside render - TotalDisplay')
//         return (
//             <>
//                 <input type="number" onBlur={this.onInputChange} />
//                 <span id="id-span">{this.state.total}</span>
//                 <TotalDetails count={this.state.total} />
//             </>
//         )
//     }
// }

const TotalDisplay = () => {
    const [state, updateStateValue ] = useState({
        total: 0,
        name: 'React'
    });

    const onInputChange = (e) => {
        updateStateValue({
            ...state,
            total: state.total + parseInt(e.target.value)
        });
    };
    //componentDidMount
    useEffect(() => {
        console.log('inside useEffect');
    }, []);
    console.log('inside TotalDisplay Fn');

    return (
                <>
                    <input type="number" onBlur={onInputChange} />
                    <span>{state.total}</span>
                    <span>{state.name}</span>
                    <TotalDetails count={state.total} />
                </>
            )
}



export default TotalDisplay;

//state
//props