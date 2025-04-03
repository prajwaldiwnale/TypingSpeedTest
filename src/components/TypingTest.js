import React from 'react';

const TypingTest = ({ text, userInput, handleInputChange, stopTest, inputRef }) => {
  return (
    <div className="typing-test">
      <p>{text}</p>
      <textarea
        ref={inputRef}
        value={userInput}
        onChange={handleInputChange}
        placeholder="Start typing here..."
      />
      <button onClick={stopTest}>Stop Test</button>
    </div>
  );
};

export default TypingTest;