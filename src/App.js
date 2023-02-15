import './App.css';
import DropDown from './components/DropDown';
import Footer from './components/Footer';
import NavTop from './components/Nav';
import { Container } from 'react-bootstrap';
import Home from './components/Home';

function App() {


  return (
    <>
      <NavTop />
      <Container >

        <DropDown />
        <Home />


      </Container>
      <Footer />
    </>

  );
}

export default App
