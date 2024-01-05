import { useState, useEffect } from 'react';

const useStorage = (key, initialValue, storageType = 'localStorage') => {
  const storage = storageType === 'localStorage' ? localStorage : sessionStorage;

  const storedValue = storage.getItem(key) || initialValue;
  const [value, setValue] = useState(storedValue);

  useEffect(() => {
    storage.setItem(key, value);
  }, [key, value, storage]);

  return [value, setValue];
};

export default useStorage;
