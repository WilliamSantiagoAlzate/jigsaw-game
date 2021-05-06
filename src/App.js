// Import libraries
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Import components
import { ViewJigsawList } from './views/Jigsaw/List/List';
// Import style
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ViewJigsawList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
