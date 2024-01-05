import { useState, useEffect } from 'react';

const UseStorageSession = (key, initialValue) => {
  const storedValue = sessionStorage.getItem(key) || initialValue;
  const [value, setValue] = useState(storedValue);

  useEffect(() => {
    sessionStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
};

export default UseStorageSession;
