
import './App.css';
import Dashboard from './components/Dashboard';
import HeaderComponent from './components/layout/HeaderComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import AddProduct from './components/merchants/AddProduct';
import { Provider } from 'react-redux';
import store from './store';
import UpdateProduct from './components/merchants/UpdateProduct';
import React, { Component }  from 'react';
import Home from './components/layout/Home';
import adp from './components/merchants/adp';
/**
 * Author:Shakamuri Sushma
 * The render is a method that is used to display the outputs 
 * The Provider makes the redux store available to all the components.
 * The Router allows us to navigate to different components.
 * The Route is used to render the current URL and it will ignore all other components
 */
function App() {
  return (
    <Provider store={store}>
      <Router>
        <HeaderComponent/>
        <Route exact path="/" component={Home}/>   
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path="/addProduct" component={adp}/>
        <Route exact path="/updateProduct/:productId" component={UpdateProduct}/>
      </Router>
    </Provider>
  );
}

export default App;
