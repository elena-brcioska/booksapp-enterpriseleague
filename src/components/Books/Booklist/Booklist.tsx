import { FC, useEffect } from "react";
import BookCard from "../BookCard/BookCard";
import { useBooks } from "../../../hooks/useBooks/useBooks";
import styles from "./styles/Booklist.module.css";
import Spinner from "../../UI/Spinner/Spinner";
import { BooklistProps } from "../types";

const Booklist: FC<BooklistProps> = ({ searchQuery, sortBy }) => {
  const {
    sortedBooks,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useBooks(searchQuery, sortBy);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollHeight - scrollTop <= clientHeight + 50 && hasNextPage) {
        fetchNextPage();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchNextPage, hasNextPage]);

  const noMoreBooksAvailable =
    !hasNextPage &&
    !isFetchingNextPage &&
    !isLoading &&
    !isError &&
    sortedBooks.length !== 0;

  return (
    <div className={styles["booklist"]}>
      <header className={styles["booklist__header"]}>
        <h2 className={styles["booklist__title"]}>Book Collection</h2>
      </header>
      <div className={styles["booklist__content"]}>
        {isLoading && <Spinner />}
        {isError && (
          <div className={styles["booklist__error"]}>Error fetching books</div>
        )}
        {sortedBooks.length === 0 && !isLoading && !isError && (
          <div>No books found</div>
        )}
        {sortedBooks.map((book) => (
          <BookCard book={book} key={book.id} searchQuery={searchQuery} />
        ))}
        {isFetchingNextPage && <Spinner />}
        {noMoreBooksAvailable && (
          <div className={styles["booklist__no-more-books"]}>
            There are no more books available
          </div>
        )}
      </div>
    </div>
  );
};

export default Booklist;
