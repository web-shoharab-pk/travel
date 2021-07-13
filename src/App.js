import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import Products from './components/Pages/Products';
import Services from './components/Pages/Services';
import SignUp from './components/Pages/SignUp';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
