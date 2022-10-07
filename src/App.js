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
      <Routes>
        <Route exact path='/' component={Home}/>
        <Route path='/projects' component={Projects}/>
        <Route path='/links' component={Links}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;


