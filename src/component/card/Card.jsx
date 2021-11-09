import React from "react";
import "./Card.css";

const Card = (props) => {
   return (
      <div className="wrapper">
         <img src="" alt="img" />
         <p className="title">{props.title}</p>
         <p className="desc">{props.desc}</p>
      </div>
   );
};

Card.defaultProps = {
   title: "Makanan",
   desc: "Harga",
};

export default Card;
