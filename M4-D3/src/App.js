import './App.css';
import  Element from './components/Props'
import { Container } from 'react-bootstrap'
import BookList from './components/BookList'
import Warning from './components/WarningSign'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>
        <Warning type='warning' />
    <BookList text="Do you like mah styleeee?!" /> 
    </Container>
  );
}

export default App;
