import styles from "./input.module.css";

const Input = ({ type, value, isValid, onChange, onTouch }) => {
  const classNames = `
    ${styles.input}
    ${isValid ? "" : styles.invalid}`;

  return (
    <input
      className={classNames}
      type={type || "text"}
      onChange={onChange}
      onBlur={onTouch}
      value={value}
    />
  );
};

export default Input;
