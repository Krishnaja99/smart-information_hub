import React from 'react';
import styles from './Card.module.css';

const Card = ({ imagePath, caption }) => {
  return (
    <div className={styles.card}>
      <img src={imagePath} alt={caption} className={styles.image} />
      <p className={styles.caption}>{caption}</p>
    </div>
  );
};

export default Card;
