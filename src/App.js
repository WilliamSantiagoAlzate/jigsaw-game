// Import libraries
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Import components
import { Hearder } from './components/UI/Header/Header';
import { Footer } from './components/UI/Footer/Footer';
// Import views
import { ViewJigsaw } from './views/Jigsaw/Jigsaw';
// Import style
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Hearder />
        <main>
          <Switch>
            <Route exact path="/" component={ViewJigsaw} />
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
