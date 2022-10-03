import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      
      <div class="sidenav">
        <div>
          <div>
            <PersonCard />
          </div>
          
          <p>
            Hello! Welcome to my site!
          </p>

        </div>
        <a href="./about">About</a>
        <a href="./projects">Projects</a>
        <a href="./links">Links</a>
      </div>

      <div>
        <Home />
      </div>

    </div>
  );
}

export default App;



