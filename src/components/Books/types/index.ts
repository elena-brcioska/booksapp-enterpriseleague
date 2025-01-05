export interface IBook {
  id: string;
  title: string;
  author: string;
  genre: string;
}

export interface IBookCard {
  book: IBook;
  key: string;
  searchQuery: string;
}

export interface IUseBooks {
  books: IBook[];
  totalCount: number;
}

export interface IUseBooksParams {
  searchQuery: string;
  sortBy: string;
}


export interface BooklistProps {
  searchQuery: string;
  sortBy: string;
}