import styles from "./Button.module.css";

const Button = ({ onClick, type, children, disabled}) => {
  return (
    <button
      onClick={onClick}
      type={type ? type : "button"}
      className={styles.button}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
