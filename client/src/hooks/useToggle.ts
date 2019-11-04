import { useState } from 'react';

const useToggle = (initalValue: boolean): [boolean, () => void] => {
  const [value, setValue] = useState<boolean>(initalValue);
  const toggle = () => setValue(!value);

  return [value, toggle];
};

export default useToggle;
