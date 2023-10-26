import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";
import CartButton from "../CartButton/CartButton";

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <SearchBar></SearchBar>
        <CartButton></CartButton>
      </div>
    </header>
  );
};

export default Header;
