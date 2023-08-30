import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Cartaz from './pages/cartaz';
import Lancamentos from './pages/lancamentos';
import Filme from './pages/filme';
import Error from './pages/error';
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
                <Route path='/filme/:id' element={ <Filme/> }/>


                <Route path='*' element={ <Error/> }/>
            </Routes>
        <Footer/>
        </BrowserRouter>
    )
}

export default RoutesApp;