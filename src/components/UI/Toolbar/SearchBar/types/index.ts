import { type ChangeEvent } from "react";

export interface ISearchField {
  searchQuery: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}