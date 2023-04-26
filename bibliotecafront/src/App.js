import { Container } from 'react-bootstrap';
import Menu from './componentes/Menu';
import Autores from './paginas/Autores';
import Home from './paginas/Home';
import AutorCad from './paginas/AutorCad';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>

      <BrowserRouter>

        <Menu />

        <Container>

          <Routes>
            <Route path='/' element={<Home />}/>  
            <Route path='/autores' element={<Autores />}/>
            <Route path='//autor' element={<AutorCad />}/>
            <Route path='*' element={<Home />}/>  
          </Routes>

        </Container>
      </BrowserRouter>

    </div>
  );
}

export default App;
