import { FC } from "react";
import { SortBy } from "./types";
import SearchBar from './SearchBar/SearchBar';
import styles from './styles/Toolbar.module.css';

interface ToolbarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sortBy: SortBy;
  setSortBy: (sortBy: SortBy) => void;
}

const Toolbar: FC<ToolbarProps> = ({ searchQuery, setSearchQuery, sortBy, setSortBy }) => {

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value as SortBy);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className={styles.toolbar}>
      <SearchBar searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      <select
        className={styles['toolbar__sort']}
        value={sortBy}
        onChange={handleSortChange}
      >
        <option value="author">Alphabetically by Author</option>
        <option value="title">Alphabetically by Title</option>
        <option value="genre">Alphabetically by Genre</option>
      </select>
    </div>
  );
};

export default Toolbar;
