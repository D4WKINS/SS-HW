
import React, { Component } from 'react'
import {Alert} from 'react-bootstrap'

class Warning extends Component {
render(){
        return (
            <Alert variant={this.props.type}>
            This is a {this.props.type} alert—check it out!
            </Alert>
            )
}
}

export default Warning