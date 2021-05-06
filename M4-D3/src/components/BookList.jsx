import React, {Component} from 'react'
import { Row, Form, FormControl, Button, CardDeck } from 'react-bootstrap'
import BookListItem from './BookListItem'
import Logo from './Logo'

class BookList extends Component {
    
    state = {
        books: [], //set an initial state,
        search:""
    }
// this.props.text , this = this class component, props = the value to be passed, text = the reference that we use to pass a value to prop
    //The first time render is executed books:[] will be undefined because we are awaiting the data from componentDidmount method
    //and nothing will be displayed on the page via the map array method
    //Once the data has been fetched from the API via componentDidMount, the data will be added to the array using setState
    //When that happens the state will realise a change has occured and will re-render according to 
    //the new state which now contains an array of books
    //These books will be displayed on the page via the map method using dot notation to reference the objects in each array item
render(){
    //Form control = Search bar
    //onChange= {(e)=> this.setState({search: e.currentTarget.value.toLowerCase()})} 
    //If at anytime the value of the search bar changes from an empty ("") state
    //The state of search will be updated with the new value that has been typed into the search bar
    //
    // {this.state.books 
    // .filter(book => book.title.toLowerCase().indexOf(this.state.search) !== -1 || book.category.toLowerCase().indexOf(this.state.search) !== -1)
    // .map(book => <BookListItem bookInfo={book} />)}
    //
    //filters the book array according to the characters that have been typed into the search bar 
    //The filtered results of the books array will then be mapped to the page
            return(
                <> 
                <Row>
                {/* <h1>{this.props.text}</h1>  */}
                <Logo />
                    <Form inline className="ml-md-auto">
                        <FormControl 
                        type="text" 
                        placeholder="Search" 
                        className="mr-sm-2"
                         value={this.state.value}
                         onChange= {(e)=> this.setState({search: e.currentTarget.value.toLowerCase()})}
                         />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Row>
                <CardDeck className ="mt-5">
                    {this.state.books
                    .filter(book => book.title.toLowerCase().indexOf(this.state.search) !== -1 || book.category.toLowerCase().indexOf(this.state.search) !== -1)
                    .map(book =>
                         <BookListItem key={book.asin} bookInfo={book} />)}
                </CardDeck>
                </>
             ) // {this.state.books.map(book => <img key = {book.asin} src={book.img} style={{width:"200px"}}/>)}
             // This code block retreives object data from each array item and places it into HTML using dot notation
    }

    componentDidMount = async () => { 
        // This method will be invoked when this component (BookList) has successfully loaded,
        // this will be executed once per component and will be responsible for executing the code within the components
    
        const response = await fetch("https://striveschool-api.herokuapp.com/books")

        if(response.ok){
            const books = await response.json()

            this.setState({
                books: books
            })
            console.log(books)
        }
    
       
    }
}

export default BookList