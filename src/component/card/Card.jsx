import React from "react";
import "./Card.css";
import soto from "./img/soto.jpg";

const Card = (props) => {
   return (
      <div className="card-wrapper">
         <img src={soto} alt="img" />
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
