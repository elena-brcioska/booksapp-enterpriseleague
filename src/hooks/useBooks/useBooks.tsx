import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchBooks } from '../../services/booksDataService/booksDataService';
import { IUseBooks } from '../../services/types';
import { FC } from 'react';

export const useBooks = () => {
  return useInfiniteQuery<IUseBooks, Error>({
    queryKey: ['books'],
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
};
