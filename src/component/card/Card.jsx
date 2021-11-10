import React from "react";
import nasgor from "./img/nasigoreng.jpg";
import "./Card.css";

const Card = (props) => {
   return (
      <div className="card-wrapper">
         <img src={nasgor} alt="img" />
         <p className="card-nama">{props.title}</p>
         <p className="card-harga">{props.desc}</p>
      </div>
   );
};

Card.defaultProps = {
   title: "Makanan",
   desc: "Harga",
};

export default Card;
