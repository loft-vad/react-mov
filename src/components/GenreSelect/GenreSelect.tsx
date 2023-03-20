import React from 'react';
import styles from './GenreSelect.module.scss';

export interface genre {
  id: number;
  name: string;
}

export interface GenreProps {
  genres: genre[];
  activeItem?: string;
  onSelect: (name: genre['name']) => void;
}

const GenreSelect: React.FC<GenreProps> = ({
  genres = [],
  activeItem = genres[0].name,
  onSelect,
}) => {
  return (
    <div className={styles.wrapper}>
      <ul>
        {genres.map(({ id, name }) => (
          <li key={id} className={activeItem === name ? styles.active : ''}>
            <button onClick={() => onSelect(name)}>{name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenreSelect;
