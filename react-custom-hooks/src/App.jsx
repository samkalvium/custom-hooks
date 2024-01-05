// MyComponent.jsx
import React from 'react';
import useStorage from '../components/UseStorage';
import useStorageSession from '../components/UseStorageSession'; 

const MyComponent = () => {
  const [inputValue, setInputValue] = useStorage('local', '');
  const [inputValueSession, setInputValueSession] = useStorageSession('session', '');

  return (
    <div>
      Local storage:-
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <br />
      Session storage:-
      <input
        type="text"
        value={inputValueSession}
        onChange={(e) => setInputValueSession(e.target.value)}
      />
    </div>
  );
};

export default MyComponent;
