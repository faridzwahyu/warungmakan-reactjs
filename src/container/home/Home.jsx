import React from "react";
import { Fragment, Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./Home.css";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";

class Home extends Component {
   render() {
      return (
         <Fragment>
            <header>
               <h1>Warung Makan</h1>
               <nav>
                  <Link to="/">Menu</Link>
                  <Link to="/order">Pesan</Link>
               </nav>
            </header>
            <Routes>
               <Route path="/" exact element={<Menu />} />
               <Route path="/order" element={<Order />} />
            </Routes>
         </Fragment>
      );
   }
}

export default Home;
