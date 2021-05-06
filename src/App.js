// Import libraries
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Import components
import { ViewJigsaw } from './views/Jigsaw/Jigsaw';
// Import style
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ViewJigsaw} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
