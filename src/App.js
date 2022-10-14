import './App.css';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Projects from './pages/Projects';
import Links from './pages/Links';
import {BrowserRouter, Route, Routes} from 'react-router-dom';



function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Sidebar />
        <Routes>
          <Route exact path='/home' element={<Home />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/links' element={<Links />}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;


