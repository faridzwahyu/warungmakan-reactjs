import React from "react";
import { Fragment, Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./Home.css";
import Promo from "../pages/Promo/Promo";
import Order from "../pages/Order/Order";

class Home extends Component {
   render() {
      return (
         <Fragment>
            <header>
               <h1>Warung Makan</h1>
               <nav>
                  <Link to="/">Promo</Link>
                  <Link to="/order">Daftar Menu</Link>
                  <Link to="/order">Pesan Sekarang</Link>
               </nav>
            </header>
            <Routes>
               <Route path="/" exact element={<Promo />} />
               <Route path="/order" element={<Order />} />
            </Routes>
         </Fragment>
      );
   }
}

export default Home;
