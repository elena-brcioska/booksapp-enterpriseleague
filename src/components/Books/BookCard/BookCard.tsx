import React, { FC, JSX } from 'react';
import { IBookCard } from '../types';
import styles from './styles/BookCard.module.css';

const BookCard: FC<IBookCard> = ({ book, searchQuery }) => {
  const highlightText = (text: string, query: string): JSX.Element[] => {
    if (!query) return [<span key="0">{text}</span>];

    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, index) => {
      if (part.toLowerCase() === query.toLowerCase()) {
        return (
          <span key={index} className={styles.highlight}>
            {part}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className={styles["book-card"]}>
      <h3 className={styles["book-card__title"]}>
        {highlightText(book.title, searchQuery)}
      </h3>
      <p className={styles["book-card__author"]}>
        {highlightText(book.author, searchQuery)}
      </p>
      <p className={styles["book-card__genre"]}>
        {highlightText(book.genre, searchQuery)}
      </p>
    </div>
  );
};

export default BookCard;
