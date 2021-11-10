import React from "react";
import { Component } from "react";
import "./Order.css";
import soto from "./img/soto.jpg";

class Order extends Component {
   state = {
      order: 0,
   };

   orderKurang = () => {
      if (this.state.order > 0) {
         this.setState({
            order: this.state.order - 1,
         });
      }
   };

   orderTambah = () => {
      this.setState({
         order: this.state.order + 1,
      });
   };

   render() {
      return (
         <div className="order-wrapper">
            <div className="order-product">
               <img src={soto} alt="img" />
               <p className="order-nama">Nasi Soto</p>
               <p className="order-harga">Rp 7500</p>
               <div className="order-jumlah">
                  <div className="minus" onClick={this.orderKurang}>
                     -
                  </div>
                  <input type="text" value={this.state.order} />
                  <div className="plus" onClick={this.orderTambah}>
                     +
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default Order;
