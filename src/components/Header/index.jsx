import React from 'react';
import styles from "./style.module.css";
import { useState } from 'react';

const Header = () => {
const [authBth , setAuthBtn] = useState("Login");
  return (
    <div className={styles["header"]}>
        <div className={styles["logo-container"]}>
            <img className={styles["logo"]} src='https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-food-logo-png-image_5687686.png'/>
        </div>
        <div className={styles["navItems"]}>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button className='authBtn' onClick={()=>{
                  authBth === "Login" ? 
                  setAuthBtn("Logout") :
                  setAuthBtn("Login")
                }}>{authBth}</button>
            </ul>
        </div>
    </div>
 
  )
}

export default Header