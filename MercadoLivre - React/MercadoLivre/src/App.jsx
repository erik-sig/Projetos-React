import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Provider from "./context/Provider";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <Provider>
      <Header></Header>
      <Products></Products>
      <Cart></Cart>
    </Provider>
  );
}

export default App;
