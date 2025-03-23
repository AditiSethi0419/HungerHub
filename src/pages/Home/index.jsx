import React from 'react';
import RestaurantCard from '../../components/RestaurantCard';
import styles from "./style.module.css";

const Home = () => {
  return (
    <div className={styles['top-res-sec']}>
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </div>
  );
}

export default Home;
