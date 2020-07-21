import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import TestComponent from './components/TestComponent';

const App = (props) => {
    return (
       <BrowserRouter>
            <div className="App">
              {/* <Navbar/>
              <Switch>
                  <Route exact path="/Adobe_Cart" component={Home}/>
                  <Route path="/cart" component={Cart}/>
              </Switch> */}
              <TestComponent />
             </div>
       </BrowserRouter>
      
    );
}

export default App;
