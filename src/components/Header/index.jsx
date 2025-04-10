import React from "react";
import styles from "./style.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () => {
  const [authBth, setAuthBtn] = useState("Login");


  //Subscribing to store using a selector
  const cartItems = useSelector((store) => store.cart.items)
  console.log(cartItems);
  return (
    <div className={styles["header"]}>
      <div className={styles["logo-container"]}>
        <img
          className={styles["logo"]}
          src="https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-food-logo-png-image_5687686.png"
        />
      </div>
      <div className={styles["navItems"]}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li >
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>
          <button
            className="authBtn"
            onClick={() => {
              authBth === "Login" ? setAuthBtn("Logout") : setAuthBtn("Login");
            }}
          >
            {authBth}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
