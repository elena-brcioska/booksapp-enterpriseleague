import api from "../dataServiceApi/api";
import { IUseBooks } from "../types";

export const fetchBooks = async (page: number = 1, limit: number = 10): Promise<IUseBooks> => {
  const params: { [key: string]: string | number | undefined } = {
    _page: page,
    _limit: limit,
  };

  const response = await api.get('/books', { params });

  const totalCount = parseInt(response.headers["x-total-count"], 10);

  return {
    books: response.data, 
    totalCount,
  };
};
