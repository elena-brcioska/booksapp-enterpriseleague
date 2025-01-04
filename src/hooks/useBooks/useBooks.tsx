import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchBooks } from "../../services/booksDataService/booksDataService";
import { IUseBooks } from "../../services/types";
import { useEffect, useState } from "react";

export const useBooks = (searchQuery: string, sortBy: string) => {
  
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery<IUseBooks, Error>({
    queryKey: ["books", { searchQuery, sortBy }],
    queryFn: ({ pageParam = 1 }) => fetchBooks(pageParam as number),
    getNextPageParam: (lastPage, allPages) => {
      const totalFetchedBooks = allPages.reduce(
        (sum, page) => sum + (page.books?.length || 0),
        0
      );
      return totalFetchedBooks < lastPage.totalCount
        ? allPages.length + 1
        : undefined;
    },
    initialPageParam: 1,
  });

  const books = data ? data.pages.flatMap((page) => page.books) : [];

  useEffect(() => {
    if (searchQuery && hasNextPage && !isFetchingNextPage && !isSearching) {
      setIsSearching(true);

      const preFetchBooks = async () => {
        let pagesFetched = 0;
        const maxPagesToFetch = 5;

        while (hasNextPage && pagesFetched < maxPagesToFetch) {
          await fetchNextPage();
          pagesFetched++;
        }

        setIsSearching(false);
      };

      preFetchBooks();
    }
  }, [searchQuery, fetchNextPage, hasNextPage, isFetchingNextPage, isSearching]);

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

  return {
    sortedBooks,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  };
};
