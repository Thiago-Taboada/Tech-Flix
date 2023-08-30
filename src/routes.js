import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cartaz from './pages/Cartaz';
import Lancamentos from './pages/Lancamentos';
import Favoritos from './pages/Favoritos';
import Filme from './pages/Filme';
import Error from './pages/Error';
import Header from './components/Header';
import Footer from './components/Footer';

function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path='/' element={ <Home/> }/>
                <Route path='/cartaz' element={ <Cartaz/> }/>
                <Route path='/lancamentos' element={ <Lancamentos/> }/>
                <Route path='/favoritos' element={ <Favoritos/> }/>
                <Route path='/filme/:id' element={ <Filme/> }/>


                <Route path='*' element={ <Error/> }/>
            </Routes>
        <Footer/>
        </BrowserRouter>
    )
}

export default RoutesApp;