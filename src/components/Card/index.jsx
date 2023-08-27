import React from 'react';
import styles from './Card.module.scss';

export default function Card({ title, imageUrl, price, onFavorite, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  const onClickPlus = () => {
    onPlus({ title, imageUrl, price });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ title, imageUrl, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <div className="favorite" onClick={onClickFavorite}>
        <img
          src={isFavorite ? '/img/liked.svg' : '/img/unliked.svg'}
          alt={isFavorite ? 'Liked' : 'Unliked'}
        />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneaker #1" />
      <h5>{title}</h5>
      <div className="d-flex justify-between">
        <div className="d-flex flex-column">
          <span>Цена: </span>
          <b>{price}</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
          alt="Plus"
        />
      </div>
    </div>
  );
}
