import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Textform from './components/Textform';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');  // Mode state for dark/light mode
  const [alert, setAlert] = useState(null);

  const triggerAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null); // Set the alert state to null after 3 seconds
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = '#252c3e';
      document.body.style.color = 'white';
      triggerAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.background = 'white';
      document.body.style.color = 'black';
      triggerAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <Router> {/* Wrap everything in Router to enable routing */}
      <Navbar title="TextUtils" mode={mode} togglemode={toggleMode} />
      <Alert alert={alert} />  {/* Display alert when active */}

      <div className="container my-3">
        <Routes> {/* Define the routes */}
          <Route 
            path="/" 
            element={<Textform triggerAlert={triggerAlert} heading="Enter the text to analyze" mode={mode} />} 
          />
          <Route 
            path="/about" 
            element={<About mode={mode} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
