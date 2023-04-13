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
      <div>Sort by</div>
      <select
        defaultValue={selected}
        onChange={(e) => onSelect(e.target.value)}
        data-testid="select"
      >
        {values.map(({ id, name }) => (
          <option key={id} value={name} data-testid="option">
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortControl;
