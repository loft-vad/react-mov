import React from "react";
import styles from "./GenreSelect.module.scss";

export interface GenreProps {
  genres: string[];
  activeItem?: string;
  onSelect: (name: string) => void;
}

const GenreSelect: React.FC<GenreProps> = ({ genres, activeItem = genres[0], onSelect }) => {
  return (
    <div className={styles.wrapper}>
      <ul>
        {genres.map((name, index) => (
          <li key={index + name} className={activeItem === name ? styles.active : ""}>
            <button onClick={() => onSelect(name)} data-testid="genre">
              {name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenreSelect;
