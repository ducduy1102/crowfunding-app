import { useState } from "react";

export default function useToggleValue(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const handleToggeValue = () => {
    setValue(!value);
  };
  return {
    value,
    handleToggeValue,
  };
}
