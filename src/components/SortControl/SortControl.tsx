import React from "react";
import styles from "./SortControl.module.scss";

export interface sortByValue {
  id: number;
  name: string;
}

export interface SortByProps {
  values: sortByValue[];
  selected: sortByValue["name"];
  onSelect: (value: sortByValue["name"]) => void;
}

const SortControl: React.FC<SortByProps> = ({ values, selected, onSelect }) => {
  return (
    <div className={styles.wrapper}>
      <select>
        {values.map(({ id, name }) => (
          <option
            key={id}
            value={name}
            onClick={() => onSelect(name)}
            selected={selected === name ? true : false}
          >
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortControl;
