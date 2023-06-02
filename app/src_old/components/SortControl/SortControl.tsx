import React from "react";
import styles from "./SortControl.module.css";

export interface sortByValue {
  id: number;
  name: string;
  value?: string;
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
        {values.map(({ id, name, value = "" }) => (
          <option key={id} value={value} data-testid="option">
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortControl;
