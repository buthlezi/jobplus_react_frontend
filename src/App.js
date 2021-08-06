import './App.css';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import Cookie from './components/Cookie';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  let history = useHistory();
  return (
    <>
    | <BrowserRouter history={history}>
        <Navbar/>
        <Switch>
          <Route exact path='/' render={props => <Home {...props} />} />
        </Switch>
        <Cookie />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
