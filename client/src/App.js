import './App.css';
import PlanetariumContainer from './containers/PlanatariumContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './containers/AboutContainer';
import Mercury from './containers/MercuryContainer';
import Venus from './containers/VenusContainer';
import Earth from './containers/EarthContainer';
import Mars from './containers/MarsContainer';
import Jupiter from './containers/JupiterContainer';
import Saturn from './containers/SaturnContainer';
import Uranus from './containers/UranusContainer';
import Neptune from './containers/NeptuneContainer';
import Quiz from './containers/QuizContainer';
import space from './assests/space.png';

function App() {
  return (
    
    <Router>
    
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <PlanetariumContainer />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/Mercury">
            <Mercury />
          </Route>
          <Route path="/Venus">
            <Venus />
          </Route>
          <Route path="/Earth">
            <Earth />
          </Route>
          <Route path="/Mars">
            <Mars />
          </Route>
        
                
                <Route path="/Jupiter">
                
               
                <Jupiter />
              
          </Route>
        
          <Route path="/Saturn">
            <Saturn />
          </Route>
          <Route path="/Uranus">
            <Uranus />
          </Route>
          <Route path="/Neptune">
            <Neptune />
          </Route>

          
          <Route path="/Quiz">
          
            <Quiz />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
