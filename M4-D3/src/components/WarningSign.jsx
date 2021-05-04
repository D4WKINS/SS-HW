
import React, { Component } from 'react'
import {Alert} from 'react-bootstrap'

class Warning extends Component {

        return (
                <Alert key={idx} variant={variant}> This is a {variant} alert—check it out! </Alert>
            )
}


export default Warning