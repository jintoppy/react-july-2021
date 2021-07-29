import { Component, useEffect } from 'react';

// class TotalDetails extends Component {
//     render(){
//         return (
//             <div>
//                 This is total Details component
//                 <h2>{this.props.count}</h2>
//             </div>
//         )
//     }
// }

const TotalDetails = (props) => {
    //componentDidUpdate
    console.log(props.count);
    useEffect(() => {
        
        console.log('inside useEffect of TotalDetails');
    }, [props.count]);
    return (
                <div>
                    This is total Details component
                    <h2>{props.count}</h2>
                </div>
            )
}

export default TotalDetails;