import React, { useState, useEffect } from 'react';
import UserInputBox from './UserInputBox';

export default function ApiExample() {
  const [jsData, setJsData] = useState(null);
  const [pythonData, setPythonData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    // Fetch data from the JS API endpoint
    const getJSApiTest = async () => {
      const res = await fetch('/api/test');
      const json = await res.json();
      setJsData(json);
      setLoading(false);
    };
    getJSApiTest();
  }, []);

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleInputSubmit = async () => {
    setLoading(true);

    // Send a GET request to the Python API endpoint
    const res = await fetch('/api/python', {
      method: 'GET',
    });
    const json = await res.json();
    setPythonData(json);
    setLoading(false);
  };

  let result = [];
  if (isLoading) {
    result = [<p key={'loading'}>Loading...</p>];
  } else {
    result = [];
    if (!jsData) {
      result.push(<p key={'js_wait'}>Waiting for JS API result</p>);
    } else {
      result.push(
        <div key={'js'}>Result of JS API call: {jsData.result}</div>
      );
    }
    if (!pythonData) {
      result.push(<p key={'python_wait'}>Waiting for Python API result</p>);
    } else {
      result.push(
        <div key={'python'}>Result of Python API call: {pythonData.message}</div>
      );
    }
  }

  return (
    <div>
      {result}
      <UserInputBox onInputChange={handleInputChange} />
      <button onClick={handleInputSubmit}>Submit</button>
    </div>
  );
}
