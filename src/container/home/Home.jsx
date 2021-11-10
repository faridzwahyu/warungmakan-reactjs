import React from "react";
import { Fragment, Component } from "react";
import Card from "../../component/card/Card";
import Order from "../Order/Order";
import "./Home.css";

class Home extends Component {
   state = {
      order: 0,
   };

   totalSemuaOrder = (total) => {
      this.setState({
         order: total,
      });
   };

   render() {
      return (
         <Fragment>
            <div className="header">
               <h1>Warung Makan</h1>
               <div className="order-cart">
                  <div>Bayar :</div>
                  <div className="count">Rp {this.state.order * 7500}</div>
               </div>
            </div>
            {/* <div className="main">
               <Card title="Nasi Goreng" desc="Rp 10.000" />
               <Card title="Soto" desc="Rp 15.000" />
               <Card title="Bakso" desc="Rp 11.000" />
               <Card title="Nasi Pecel" desc="Rp 5.000" />
               <Card />
            </div> */}
            <div className="main">
               <Order
                  orderProduk={(jmlhOrder) => {
                     this.totalSemuaOrder(jmlhOrder);
                  }}
               />
            </div>
         </Fragment>
      );
   }
}

export default Home;
