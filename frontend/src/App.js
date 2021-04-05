import React,{useState, useEffect,createContext} from "react";
import "./App.css";
import { useSelector } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import SigninScreen from "./screens/SigninScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProductsScreen from "./screens/ProductsScreen";
import CatProducts from "./screens/CatProducts";
import ShipppingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import {Redirect} from "react-router-dom";
import PropTypes from "prop-types";
import {Link,Route,BrowserRouter } from "react-router-dom";
import {BrowserHistory } from "react-router";
import logo from "./Images/logo.png";
import { connect } from "react-redux";
import { useHistory } from "react";



function App(props) {
	
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    var category ='';
  
    const openmenu = () => {
        document.querySelector(".sidebar").classList.add("open");
    };
    const closemenu = () => {
        document.querySelector(".sidebar").classList.remove("open");
    };
	
    return (
        <BrowserRouter>
            <div className="grid-container">
                <header className="header">
                    <div className="brand">
                        <button onClick={openmenu}>&#9776;</button>
                        <Link to="/">
                              Origami watches
                            <img src={logo} className="logo" />
                        </Link>
                    </div>
					
                    <div className="header-links">
                        <span>
                            <Link to="/cart">
                                <span class="material-icons">
                                    shopping_cart
                                </span>
                            </Link>
                        </span>
                        <span>
                            {userInfo ? (
                                <Link to="/profile">{userInfo.name}</Link>
                            ) : (
                                <Link to="/signin">
                                    <span class="material-icons">login</span>
                                </Link>
                            )}
                        </span>
                    </div>
                </header>
                <aside className="sidebar">
                    <h3>Categories</h3>
                    <button
                        className="sidebar-close-button"
                        onClick={closemenu}
                    >
                        <span class="material-icons">arrow_back_ios</span>
                    </button>
					
				
                    <ul>
                        <li>
                            <a href="/products">CreateEditDelete product</a>
                        </li>
						<li>
					
							<Link to={{ pathname: '/CatProducts', state: { cat: 'MENS'} }}>Men's</Link>
                        </li>
                        <li>
				
                            <Link to={{ pathname: '/CatProducts', state: { cat: 'WOMENS'} }}>Women's</Link>
                        </li>
                        <li>  
                            <Link to={{ pathname: '/CatProducts', state: { cat: 'UNISEX'} }}>Unisex</Link>
                        </li>
                        <li>
                           <Link to={{ pathname: '/CatProducts', state: { cat: 'CHILDREN'} }}>Children's</Link>
						</li>
						<li>
                            <a href="/home">Αρχική σελίδα</a>
                        </li>
                      
                    </ul>
				
					
                </aside>
                <main className="main">
                    <div className="content">
                        <Route path="/products" component={ProductsScreen} />
						 <Route path="/CatProducts" component={CatProducts} />
                        <Route path="/shipping" component={ShipppingScreen} />
                        <Route path="/payment" component={PaymentScreen} />
						<Route path="/home" component={HomeScreen} />
						<Route path="/cart" component={CartScreen} />
						<Route path="/signin" component={SigninScreen} />
						<Route path="/profile" component={RegisterScreen} />
						
                        <Route
                            path="/placeorder"
                            component={PlaceOrderScreen}
                        />
                        <Route path="/signin" component={SigninScreen} />
                        <Route path="/register" component={RegisterScreen} />
                        <Route path="/product/:id" component={ProductScreen} />
                        <Route path="/"  component={HomeScreen} />
                        <Route path="/cart/:id" component={CartScreen} />
                    </div>
                </main>
                <footer className="footer">All right reserved</footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
