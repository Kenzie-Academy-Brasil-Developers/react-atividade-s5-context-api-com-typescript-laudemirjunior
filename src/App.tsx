import React, { useContext } from "react";
import Cart from "./components/Cart";
import Showcase from "./components/showcase";
import { CartContext } from "./providers/cart";
import products from "./services";

function App() {
  const { cart } = useContext(CartContext);
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Vitrine</h1>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {products.map((item) => {
          return <Showcase item={item} />;
        })}
      </div>
      <h1>Carrinho</h1>
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {cart.map((item) => {
          return <Cart item={item} />;
        })}
      </div>
    </div>
  );
}

export default App;
