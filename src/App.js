import './App.css';
import DropDown from './components/DropDown';
import Footer from './components/Footer';
import NavTop from './components/Nav';
import { Container } from 'react-bootstrap';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TvShows from './components/TvShows';

function App() {


  return (
    <>
      <BrowserRouter>
        <NavTop />
        <Container >
          <DropDown />
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/tv' element={<TvShows />} />


          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>

    </>

  );
}

export default App
