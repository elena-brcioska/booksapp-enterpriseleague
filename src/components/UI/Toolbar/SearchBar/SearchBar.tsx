import { FC } from 'react';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import styles from './styles/SearchBar.module.css';
import { ISearchField } from './types';

const SearchBar: FC<ISearchField> = ({ searchQuery, onSearchChange }) => {
  return (
    <div className={styles['search-bar']}>
      <InputBase
        value={searchQuery}
        onChange={onSearchChange}
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        className={styles['search-bar__input']}
        autoFocus
      />
      <div className={styles['search-bar__icon']}>
        <SearchIcon />
      </div>
    </div>
  );
};

export default SearchBar;
