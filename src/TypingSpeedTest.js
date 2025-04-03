import React, { useState, useEffect, useRef } from 'react';
import './TypingSpeedTest.css';

const texts = [
  "Programming is an art of telling another human what one wants the computer to do.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "A sudden gust of wind scattered the neatly stacked papers across the quiet library floor.",
  "The wind rustled through the trees, carrying the scent of spring flowers and the distant sound of a distant train.",
  "The rain fell softly on the roof, a gentle reminder of the beauty of nature's symphony.",
  "The old clock in the hallway chimed midnight, echoing softly through the empty house.",
  "The stars twinkled in the night sky, a silent witness to the stories of the past and the mysteries of the future.",
  "As the sun dipped below the horizon, the sky transformed into a brilliant canvas of orange and pink.",
  "The young artist carefully mixed shades of blue and green to paint a mesmerizing ocean scene.",
  "A gentle drizzle pattered against the window, creating a soothing rhythm on the glass.",
  "The detective carefully examined the footprints leading away from the crime scene in the dimly lit alley.",
  "A steaming cup of coffee sat untouched on the wooden table, its rich aroma filling the air.",
  "The towering roller coaster climbed to its peak before plunging down with a thrilling rush.",
  "In the silent forest, the distant howl of a wolf sent shivers down her spine"
];

const TypingSpeedTest = () => {
  const [currentText, setCurrentText] = useState('');
  const [inputText, setInputText] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [isTestActive, setIsTestActive] = useState(false);
  const [results, setResults] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [errors, setErrors] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    let timer;
    if (isTestActive) {
      timer = setInterval(() => {
        setElapsedTime(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isTestActive]);

  const startTest = () => {
    const randomText = texts[Math.floor(Math.random() * texts.length)];
    setCurrentText(randomText);
    setInputText('');
    setStartTime(Date.now());
    setIsTestActive(true);
    setResults(null);
    setElapsedTime(0);
    setErrors(0);

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const endTest = () => {
    const end = Date.now();
    setEndTime(end);
    setIsTestActive(false);

    const duration = elapsedTime / 60; // minutes
    const wordCount = currentText.trim().split(/\s+/).length;
    const wordsPerMinute = Math.round(wordCount / duration);
    const accuracy = calculateAccuracy();

    setResults({
      wpm: wordsPerMinute,
      accuracy: accuracy,
      errors: errors,
      characters: inputText.length,
      time: elapsedTime
    });
  };

  const calculateAccuracy = () => {
    const correctChars = currentText.split('').filter((char, index) => 
      char === inputText[index]
    ).length;
    return Math.round((correctChars / currentText.length) * 100);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputText(value);

    // Calculate errors
    const newErrors = value.split('').filter((char, index) => 
      char !== currentText[index]
    ).length;
    setErrors(newErrors);

    if (value === currentText) {
      endTest();
    }
  };

  const getProgress = () => {
    return (inputText.length / currentText.length) * 100;
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="typing-test-container">
      <div className="header">
        <h1>Typing Speed Test</h1>
        {isTestActive && (
          <div className="timer">
            Time: {formatTime(elapsedTime)}
          </div>
        )}
      </div>

      {!isTestActive && !results && (
        <div className="start-screen">
          <button onClick={startTest} className="start-btn">
            Start Test
          </button>
          <div className="instructions">
            <p>• Type the given text as accurately as possible</p>
            <p>• Your WPM and accuracy will be calculated</p>
            <p>• Try to type as accurately as possible</p>
          </div>
        </div>
      )}

      {isTestActive && (
        <div className="test-area">
          <div className="text-display">{currentText}</div>
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${getProgress()}%` }}
            ></div>
          </div>
          <textarea
            ref={inputRef}
            value={inputText}
            onChange={handleInputChange}
            placeholder="Start typing..."
            className="input-area"
          />
          <div className="stats">
            <span>Errors: {errors}</span>
            <span>Characters: {inputText.length}</span>
          </div>
          <button onClick={endTest} className="stop-btn">
            Stop Test
          </button>
        </div>
      )}

      {results && (
        <div className="results">
          <h2>Your Results</h2>
          <div className="result-grid">
            <div className="result-item">
              <span className="result-label">WPM</span>
              <span className="result-value">{results.wpm}</span>
            </div>
            <div className="result-item">
              <span className="result-label">Accuracy</span>
              <span className="result-value">{results.accuracy}%</span>
            </div>
            <div className="result-item">
              <span className="result-label">Errors</span>
              <span className="result-value">{results.errors}</span>
            </div>
            <div className="result-item">
              <span className="result-label">Time</span>
              <span className="result-value">{formatTime(results.time)}</span>
            </div>
          </div>
          <button onClick={startTest} className="retry-btn">
            Try Again
          </button>
        </div>
      )}
    </div>
  );
};

export default TypingSpeedTest;