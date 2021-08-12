import './App.css';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import Cookie from './components/Cookie';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import JobListings from './pages/JobListings';
import JobApplications from './pages/JobApplications';
import Search from './pages/Search';
import Notifications from './pages/Notifications';
import SavedJobs from './pages/SavedJobs';

function App() {
  let history = useHistory();
  return (
    <>
    | <BrowserRouter history={history}>
        <Navbar/>
        <Switch>
          <Route exact path='/' render={props => <Home {...props} />} />
          <Route exact path='/job-listings' render={props => <JobListings {...props} />} />
          <Route exact path='/job-applications' render={props => <JobApplications {...props} />} />
          <Route exact path='/search' render={props => <Search {...props} />} />
          <Route exact path='/notifications' render={props => <Notifications {...props} />} />
          <Route exact path='/saved-jobs' render={props => <SavedJobs {...props} />} />
        </Switch>
        <Cookie />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
