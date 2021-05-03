import React, { Component } from 'react'
import {Card} from 'react-bootstrap'


 class BookListItem extends Component {
    render() {
        return (
            <>
                <Card className="col-md-4" >
                    <Card.Img variant="top" src={this.props.bookInfo.img}/>
                        <Card.Body>
                            <Card.Title>{this.props.bookInfo.title}</Card.Title>
                                <Card.Text>
                                {this.props.bookInfo.category} - {this.props.bookInfo.price}
                                </Card.Text>
                        </Card.Body>
                </Card>
            </>
        )
    }
}


export default BookListItem

