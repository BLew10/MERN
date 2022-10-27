import React, { Component } from 'react'

const PersonCard = props => {
    return (
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age: {props.age}</p>
            {/* //since is dynamic based on what happens on the page, you want to set this variable to be a state not a prop */}
            <p>Hair Color: {props.hairColor}</p>
            {/* <button onClick={this.birthday}>Birthday Button for {this.props.firstName} {this.props.lastName}</button> */}
        </div>
    )
}

// class PersonCard extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             age: this.props.age
//             //takes age prop from App.js and sets it as a state
//         }
//     }

//     birthday = () =>{

//         this.setState({age: this.state.age + 1})
//             // this function changes the age by 1. State age becomes the previous state.age but +1
//     }
//     render() {



//         return (
//             <div>
//                 <h1>{this.props.lastName}, {this.props.firstName}</h1>
//                 <p>Age: {this.state.age}</p>
//                 {/* //since is dynamic based on what happens on the page, you want to set this variable to be a state not a prop */}
//                 <p>Hair Color: {this.props.hairColor}</p>
//                 <button onClick={this.birthday}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
//             </div>
//         )
//     }
// }

export default PersonCard