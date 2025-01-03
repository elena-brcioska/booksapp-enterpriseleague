import { FC, useEffect } from "react";
import BookCard from "../BookCard/BookCard";
import { useBooks } from "../../../hooks/useBooks/useBooks";
import styles from "./styles/Booklist.module.css";
import Spinner from "../../UI/Spinner/Spinner";
import { BooklistProps } from "../types";

const Booklist: FC<BooklistProps> = ({ searchQuery, sortBy }) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isError } = useBooks();

  const books = data ? data.pages.flatMap((page) => page.books) : [];

  const filteredBooks = books.filter((book) => {
    return (
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.genre.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const sortedBooks = filteredBooks.sort((a, b) => {
    if (sortBy === "author") {
      return a.author.localeCompare(b.author);
    }
    if (sortBy === "title") {
      return a.title.localeCompare(b.title);
    }
    if (sortBy === "genre") {
      return a.genre.localeCompare(b.genre);
    }
    return 0;
  });

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      if (scrollHeight - scrollTop <= clientHeight + 50 && hasNextPage) {
        fetchNextPage();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchNextPage, hasNextPage]);

  return (
    <div className={styles["booklist"]}>
      <header className={styles["booklist__header"]}>
        <h2 className={styles["booklist__title"]}>Book Collection</h2>
      </header>
      <div className={styles["booklist__content"]}>
        {isLoading && <Spinner />}
        {isError && <div className={styles["booklist__error"]}>Error fetching books</div>}
        {sortedBooks.length === 0 && !isLoading && !isError && <div>No books found</div>}
        {sortedBooks.map((book) => (
          <BookCard book={book} key={book.id} />
        ))}
        {isFetchingNextPage && <Spinner />}
        {!hasNextPage && !isFetchingNextPage && !isLoading && !isError && (
          <div className={styles["booklist__no-more-books"]}>There are no more books available</div>
        )}
      </div>
    </div>
  );
};

export default Booklist;
