import React from "react";
import Name from "./components/name.jsx";
import product from "./product.js";
import Description from "./components/description.jsx";
import Price from "./components/price.jsx";
import Image from "./components/image.jsx";

const App = () => {
  return (
    <div className="container">
      {product.map((prod) => (
        <div key={prod.id} className="product">
          <Image image={prod.image} />
          <Name name={prod.name} />
          <Description description={prod.description} />
          <Price price={prod.price} />
        </div>
      ))}
    </div>
  );
};

export default App;
