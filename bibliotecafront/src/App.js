import Menu from './componentes/Menu';
import Autores from './paginas/Autores';
import Home from './paginas/Home';
import { Container } from 'react-bootstrap';
import AutorCad from './paginas/AutorCad';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Categorias from './paginas/Categorias';
import CategoriaCad from './paginas/CategoriaCad';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />

        <Container>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/autores' element={<Autores />}/>
            <Route path='/autor/:id' element={<AutorCad />}/>
            <Route path='/autor' element={<AutorCad />}/>
            <Route path='/categorias' element={<Categorias />}/>
            <Route path='/categoria/:id' element={<CategoriaCad />}/>
            <Route path='/categoria' element={<CategoriaCad />}/>
            <Route path='*' element={<Home />}/>
          </Routes>
        </Container>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
