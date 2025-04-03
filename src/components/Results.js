import React from 'react';

const Results = ({ speed, resetTest }) => {
  return (
    <div className="results">
      <h2>Your Typing Speed: {speed} WPM</h2>
      <button onClick={resetTest}>Try Again</button>
    </div>
  );
};

export default Results;