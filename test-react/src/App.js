import './App.css';
import  Element from './components/Props'
import { Container } from 'react-bootstrap'
import BookList from './components/BookList'

function App() {
  return (
    <Container>
    <BookList text="Do you like mah styleeee?!" /> 
    </Container>
  );
}

export default App;
