import React from 'react';
import styles from "./style.module.css";


const RestaurantCard = (props) => {
  const { info } = props.resData;

  return (
    <div className={styles['res-card']}>
      <div className={styles["image-container"]}>
        <img className={styles["item-img"]} src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/' + info?.cloudinaryImageId} />
        <p className={styles["item-price"]}> ITEMS {info?.aggregatedDiscountInfoV3.subHeader} </p>
      </div>
      <div className={styles["hotel-info"]}>
        <p className={styles["hotel-name"]}>{info?.name}</p>
        <div className={styles['hotel-ratings']}>{info?.avgRating} * {info?.sla.deliveryTime} mins</div>
        <p className={styles['hotel-cuisines']}>
          {info?.cuisines.map(cuisine =>
            cuisine.replace(/\b\w/g, char => char.toUpperCase())
          ).join(", ")}
        </p>
      </div>
    </div>
  )
}

export default RestaurantCard