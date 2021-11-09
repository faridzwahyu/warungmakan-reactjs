import React from "react";

const Stateless = () => {
   return (
      <div>
         <h3>Hello</h3>
         <p>Saya Faridz</p>
      </div>
   );
};

class Statefull extends React.Component {
   render() {
      return (
         <div>
            <h3>Hello</h3>
            <p>Saya Faridz</p>
         </div>
      );
   }
}

export default Statefull;
