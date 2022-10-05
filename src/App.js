import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      
        <Sidebar />

      <div>
        <Home />
      </div>

    </div>
  );
}

export default App;



