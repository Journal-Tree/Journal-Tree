export default function UserInputBox({ onInputChange }) {
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
      onInputChange(event.target.value);
    };
  
    return (
      <textarea
        className="user-input-box"
        value={inputValue}
        onChange={handleInputChange}
      />
    );
  }