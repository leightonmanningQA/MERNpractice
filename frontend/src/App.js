
import Navigation from './Components/Header/Navigation';
import './Resources/App.css';

import{BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './Components/Header/About';
import HomePage from './Components/Header/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
     <Navigation/>
     <Switch>
     <Route path="/" exact>
      <HomePage/>
     </Route>
     <Route path="/about">
      <About/>
     </Route>
     
     </Switch>
     </Router>
    </div>
  );
}

export default App;
