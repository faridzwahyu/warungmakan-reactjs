import { Component } from "react";
import Card from "../../../component/card/Card";
import "./Promo.css";

class Promo extends Component {
   render() {
      return (
         <div className="promo-wrapper">
            <Card title="Nasi Goreng" desc="Rp 5000" />
            <Card title="Soto" desc="Rp 7500" />
            <Card title="Bakso" desc="Rp 6000" />
            <Card title="Nasi Pecel" desc="Rp 5.000" />
         </div>
      );
   }
}

export default Promo;
