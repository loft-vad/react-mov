import React, { useState } from 'react';
import styles from './SearchForm.module.scss';
import Button from '../common/Button/Button';

interface SearchProps {
  initialSearchString?: string;
}

const SearchForm: React.FC<SearchProps> = ({ initialSearchString = '' }) => {
  const [searchString, setSearchString] = useState(initialSearchString);

  const onSearch = () => {
    console.log('searchString ', searchString);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div className={styles.searchWrapper}>
      <input
        type='text'
        placeholder='What do you want to watch?'
        onChange={(e) => setSearchString(e.target.value)}
        onKeyDown={handleKeyDown}
        value={searchString}
      />
      <Button text='Search' callBack={() => onSearch()} />
    </div>
  );
};

export default SearchForm;
