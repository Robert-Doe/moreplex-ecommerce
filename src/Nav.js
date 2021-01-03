import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min'
import logo from './logo.png';
import './App.css'
import {NavLink} from 'react-router-dom';

const nav = (props) => {
    const activeNavItem={
        color: 'green'
    }
    const navbarBackground={
        backgroundColor:'#b9c2ef',
        position: 'fixed'
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top mb-2" style={navbarBackground}>
            <a className="navbar-brand" href="#"><img src={logo} alt="MorePlex Logo"/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink  activeStyle={activeNavItem} className="nav-link"  exact to="/">Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeStyle={activeNavItem} className="nav-link" exact to="/about">About</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <NavLink activeStyle={activeNavItem} className="nav-link" exact to="/shop" >Shop</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeStyle={activeNavItem} className="nav-link" exact to="/cart" ><i
                            className='fa fa-shopping-cart'></i>
                            <span className='badge badge-warning' id='lblCartCount'>{props.count}</span></NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default nav;