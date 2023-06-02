import React from "react";
// import styles from "./Button.module.scss";
import styles from "../Button/Button.module.css";
interface ButtonProps {
  text?: string;
  callBack?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ text = "", callBack = () => {}, type = "button" }) => {
  return (
    <button className={styles.button} onClick={callBack} type={type}>
      {text}
    </button>
  );
};

export default Button;
