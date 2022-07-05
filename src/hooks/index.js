import { useCallback, useEffect, useState } from "react";

export const useInput = (intialValue = "", validator) => {
  const [value, setValue] = useState(intialValue);
  const [isValid, setIsValid] = useState(true);
  const [isTouched, setIsTouched] = useState(false);

  const validate = useCallback(
    (value) => {
      if (validator.test(value)) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    },
    [validator]
  );

  useEffect(() => {
    validate(value);
  }, [validate, validator, value]);

  const onChange = (event) => {
    setValue(event.target.value);
    validate(event.target.value);
  };

  const onTouch = () => {
    setIsTouched(true);
  };

  const clearTouch = () => {
    setIsTouched(false);
  };

  return { value, isValid, isTouched, setValue, onChange, onTouch, clearTouch };
};
