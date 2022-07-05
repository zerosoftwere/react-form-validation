import { forwardRef, useImperativeHandle } from "react";
import { useInput } from "../../hooks";
import Input from "../Input/Input";
import styles from "./FormGroup.module.css";

const FormGroup = forwardRef(
  ({ value: initValue, type, label, validator }, ref) => {
    const { isValid, isTouched, value, setValue, onChange, onTouch, clearTouch } = useInput(
      initValue,
      validator || /.*/
    );

    useImperativeHandle(ref, () => ({
      get valid() { return isValid; },
      get touched() { return isTouched; },
      get value() { return value; },
      clear() { 
        setValue('');
        clearTouch();
      }
    }));

    return (
      <div className={styles.formGroup}>
        <label className={styles.label}>{label}</label>
        <Input
          validator={validator}
          onChange={onChange}
          onTouch={onTouch}
          isValid={isValid || !isTouched}
          value={value}
          type={type}
        />
        { !isValid && isTouched && <span className={styles.textInvalid}>Please enter { label.toLowerCase() } </span> }
      </div>
    );
  }
);

export default FormGroup;
