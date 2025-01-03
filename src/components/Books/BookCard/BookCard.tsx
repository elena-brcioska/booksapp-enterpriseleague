import React, { FC } from 'react';
import { IBookCard } from '../types';
import styles from './styles/BookCard.module.css'

const BookCard: FC<IBookCard> = ({ book }) => {
    return (
      <div className={styles["book-card"]}>
        <h3 className={styles["book-card__title"]}>{book.title}</h3>
        <p className={styles["book-card__author"]}>{book.author}</p>
        <p className={styles["book-card__genre"]}>{book.genre}</p>
      </div>
    );
  };

export default BookCard;