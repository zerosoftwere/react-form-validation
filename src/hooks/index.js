import { useEffect, useState } from "react";

export const useInput = (intialValue = "", validator) => {
  const [value, setValue] = useState(intialValue);
  const [isValid, setIsValid] = useState(true);
  const [isTouched, setIsTouched] = useState(false);

  useEffect(() => {
    setIsValid(validator(value));
  }, [validator, value]);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onTouch = () => {
    setIsTouched(true);
  };

  const clearTouch = () => {
    setIsTouched(false);
  };

  return { value, isValid, isTouched, setValue, onChange, onTouch, clearTouch };
};
