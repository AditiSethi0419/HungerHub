import React from 'react';
import styles from "./style.module.css";

const RestaurantCard = () => {
  return (
    <div className={styles['res-card']}>
        <div className={styles["image-container"]}>
            <img className={styles["item-img"]} />
            <p className={styles["item-price"]}>Items at 129</p>
        </div>
        <div className={styles["hotel-info"]}>
            <p className={styles["hotel-name"]}>Satkar Restaurant</p>
            <div className={styles['hotel-ratings']}>4.4 * 40-45 mins</div>
            <p className={styles['hotel-cuisines']}>North Indian, South Indian, Indian, Salads, Desserts
            Satkar Chowk</p>
        </div>
    </div>
  )
}

export default RestaurantCard