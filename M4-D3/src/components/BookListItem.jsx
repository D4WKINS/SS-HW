import React, { Component } from 'react'
import {Card,Col} from 'react-bootstrap'
import MyBadge from './MyBadge'


 class BookListItem extends Component {

    state = {
        selected: false
    }

    render() {
        return (
            <>
            <Col className="col-md-3 p-0 " >
                <Card onClick={()=> this.setState({selected: !this.state.selected})} style={{border: this.state.selected ? "solid 5px red": 'none'}} >
                    <Card.Img className="h-100 book-cover " variant="top" src={this.props.bookInfo.img}/>
                        <Card.Body>
                            <MyBadge type = "success" genre={this.props.bookInfo.category}/>
                            <Card.Title>{this.props.bookInfo.title}</Card.Title>
                                <Card.Text>
                                {this.props.bookInfo.price}
                                </Card.Text>
                        </Card.Body>
                </Card>
            </Col>
            </>
        )
    }
}


export default BookListItem

