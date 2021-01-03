import './App.css';
import Nav from './Nav';
import Footer from './Footer';
import React,{useState} from 'react'
import About from "./About";
import Shop from './Shop'
import Home from './Home'
import Cart from './Cart'

import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'

const style={
    backgroundColor:'salmon'
}
function App() {
    //const [count,setCount]=useState(JSON.parse(localStorage.getItem('cart')).length)
  return (
    <Router>
          <div className='App'>
            <Nav />
            <div style={style}>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/about' component={About} />
                    <Route path='/shop' component={Shop}/>
                    {/*<Route path='/cart' component={Cart}/>*/}
                </Switch>

            </div>
            <Footer/>
         </div>
    </Router>
  );
}


export default App;
