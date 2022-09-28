import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/animalwelf';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import reato from './components/pages/animalwelf';
import kids from './components/pages/underprev';
import aboutus from './components/pages/aboutus';
// import authentication from './components/pages/auth';
import authen from './components/pages/auth';
import donate from './components/pages/donate';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          {/* <Route path='/services' component={Services} /> */}
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/animalwelfare' component={reato}/>
          <Route path = '/underprevkids' component={kids}/>
          <Route path = '/aboutus' component={aboutus}/>
          <Route path = '/auth' component={authen}/>
          <Route path = '/donate' component={donate}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
