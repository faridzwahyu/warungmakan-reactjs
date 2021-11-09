import React from "react";
import { Fragment, Component } from "react";
import Card from "../../component/card/Card";
import "./Home.css";

class Home extends Component {
   render() {
      return (
         <Fragment>
            <div className="header">
               <h2>Navigasi</h2>
            </div>
            <hr />
            <div className="main">
               <Card title="Nasi Goreng" desc="Rp 10.000" />
               <Card title="Soto" desc="Rp 15.000" />
               <Card title="Bakso" desc="Rp 11.000" />
               <Card title="Nasi Pecel" desc="Rp 5.000" />
               <Card />
            </div>
         </Fragment>
      );
   }
}

export default Home;
