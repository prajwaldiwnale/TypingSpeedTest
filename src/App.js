import React from 'react';
import TypingSpeedTest from './TypingSpeedTest';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <TypingSpeedTest />
      </main>
      <Footer />
    </div>
  );
}

export default App;