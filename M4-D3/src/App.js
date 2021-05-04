import './App.css';
import  Element from './components/Props'
import { Container } from 'react-bootstrap'
import BookList from './components/BookList'
import Warning from './components/WarningSign'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>
    <BookList text="Do you like mah styleeee?!" /> 
    <Warning type='warning' />
    </Container>
  );
}

export default App;
