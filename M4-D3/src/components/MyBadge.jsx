
import React, { Component } from 'react'
import {Badge} from 'react-bootstrap'

 class MyBadge extends Component {
    render() {
        return (
            <>
                <Badge pill variant={this.props.type}>
                    {this.props.genre}
                </Badge>{''}
            </>
        )
    }
}

export default MyBadge

