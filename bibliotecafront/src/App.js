import Menu from './componentes/Menu';
import Autores from './paginas/Autores';
import Home from './paginas/Home';
import { Container } from 'react-bootstrap';
import AutorCad from './paginas/AutorCad';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Categorias from './paginas/Categorias';
import CategoriaCad from './paginas/CategoriaCad';
import Pessoas from './paginas/Pessoas';
import PessoaCad from './paginas/PessoaCad';
import Livros from './paginas/Livros';

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

            <Route path='/pessoas' element={<Pessoas />}/>
            <Route path='/pessoa/:id' element={<PessoaCad />}/>
            <Route path='/pessoa' element={<PessoaCad />}/>

            <Route path='/livros' element={<Livros />}/>
            {/*<Route path='/livro/:id' element={< />}/>
            <Route path='/livro' element={< />}/> */}

            <Route path='*' element={<Home />}/>
          </Routes>
        </Container>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
