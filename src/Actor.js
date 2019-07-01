import React, { Component } from 'react';

const Actor = (props) => (
    <li>{props.name} as {props.role}</li>
)
// class Actor extends Component {
//     render() {
//         return (
//             <li>{this.props.name} as {this.props.role}</li>
//         )
//     }
// }

export default Actor;
