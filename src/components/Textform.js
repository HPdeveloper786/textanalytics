import React, { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState('');
  const [theme, setTheme] = useState('default'); // default theme

  const toggleTheme = () => {
    let newTheme;
    // Cycle through the 5 themes
    if (theme === 'default') {
      newTheme = 'dark';
    } else if (theme === 'dark') {
      newTheme = 'light';
    } else if (theme === 'light') {
      newTheme = 'blue';
    } else if (theme === 'blue') {
      newTheme = 'green';
    } else {
      newTheme = 'default';
    }
    
    setTheme(newTheme);
    document.body.style.backgroundColor = getBackgroundColor(newTheme);
    document.body.style.color = getTextColor(newTheme);
    document.body.style.borderColor = getBorderColor(newTheme);
    
    props.triggerAlert(`${newTheme.charAt(0).toUpperCase() + newTheme.slice(1)} theme has been enabled`, "success");
  };

  const getBackgroundColor = (theme) => {
    switch (theme) {
      case 'dark':
        return '#343a40';
      case 'light':
        return '#f8f9fa';
      case 'blue':
        return '#007bff'; // Blue background
      case 'green':
        return '#28a745'; // Green background
      default:
        return '#ffffff'; // Default background
    }
  };

  const getTextColor = (theme) => {
    // Adjust text color based on theme
    return theme === 'dark' || theme === 'blue' || theme === 'green' ? 'white' : 'black';
  };

  const getBorderColor = (theme) => {
    switch (theme) {
      case 'dark':
        return '#6c757d';
      case 'light':
        return '#ced4da';
      case 'blue':
        return '#0056b3'; // Darker blue for the border
      case 'green':
        return '#218838'; // Darker green for the border
      default:
        return '#e0e0e0'; // Default border color
    }
  };

  const handleUpClick = () => {
    if (text.trim()) {
      let newText = text.toUpperCase();
      setText(newText);
      props.triggerAlert("Converted to Uppercase", "success");
    } else {
      props.triggerAlert("Please enter text first", "warning");
    }
  };

  const handleDownClick = () => {
    if (text.trim()) {
      let lowText = text.toLowerCase();
      setText(lowText);
      props.triggerAlert("Converted to Lowercase", "success");
    } else {
      props.triggerAlert("Please enter text first", "warning");
    }
  };

  const handleClearClick = () => {
    if (text.trim()) {
      setText("");
      props.triggerAlert("Text has been cleared", "success");
    } else {
      props.triggerAlert("No text to clear", "warning");
    }
  };

  const handleExtraSpaces = () => {
    if (text.trim()) {
      let newText = text.split(/\s+/).join(" ");
      setText(newText);
      props.triggerAlert("Removing extra spaces", "success");
    } else {
      props.triggerAlert("No text to clean", "warning");
    }
  };

  const handleCopy = () => {
    if (text.trim()) {
      let textArea = document.getElementById("text");
      textArea.select();
      navigator.clipboard.writeText(textArea.value);
      props.triggerAlert("Your Text has been copied", "success");
    } else {
      props.triggerAlert("No text to copy", "warning");
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const textColor = props.mode === 'dark' ? 'white' : 'black';

  return (
    <div className="container mt-5">
      <div className="row">
      <h1 className="mb-4  text-center" style={{ fontSize: '2rem' }}>{props.heading}</h1>

        <div className="col-12 col-md-6">
          <div className="form-group" style={{ position: 'relative' }}>
            <textarea
              className="form-control"
              id="text"
              rows="8"
              value={text}
              onChange={handleOnChange}
              style={{
                background: props.mode === 'dark' ? '#343a40' : 'white',
                color: props.mode === 'dark' ? 'white' : 'black',
                borderColor: getBorderColor(theme),
                transition: 'all 0.3s ease',
                padding: '15px',
                borderRadius: '10px',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                maxWidth: '100%',
                width: '100%',
                height: '100%',
              }}
            />
          </div>

          <div className="d-flex flex-column justify-content-start mt-3">
            <div className="d-flex justify-content-between mb-2">
              <button disabled={text.length===0} className="btn btn-primary px-4 py-2 rounded-3 transition-all" onClick={handleUpClick}>Uppercase</button>
              <button disabled={text.length===0}className="btn btn-secondary px-4 py-2 rounded-3 transition-all" onClick={handleDownClick}>Lowercase</button>
              <button disabled={text.length===0}className="btn btn-danger px-4 py-2 rounded-3 transition-all" onClick={handleClearClick}>Clear Text</button>
            </div>

            <div className="d-flex justify-content-between mb-2">
              <button disabled={text.length===0} className="btn btn-warning px-4 py-2 rounded-3 transition-all" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
              <button disabled={text.length===0}className="btn btn-success px-4 py-2 rounded-3 transition-all" onClick={handleCopy}>Copy Text</button>
            </div>

            <div className="d-flex justify-content-start mt-2">
              <button
                className="btn btn-dark py-2 px-4 rounded-3 transition-all"
                disabled={text.length===0}
                onClick={toggleTheme}
                style={{ fontWeight: 'bold' }}
              >
                Toggle Theme
              </button>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="container mt-5 text-center">
            <h2 className="mb-4" style={{ fontSize: '2rem', fontWeight: 'bold', color: textColor }}>Your Text Summary</h2>

            <div
              className="summary-box p-4 border rounded-3 mb-4"
              style={{
                backgroundColor: '#f8f9fa',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                fontSize: '1.25rem',
                color: textColor,
                maxWidth: '100%',
                maxHeight: '200px',
                width: '100%',
                height: 'auto',
              }}
            >
              <p className="d-flex justify-content-center align-items-center">
                <strong className="text-primary" style={{ fontSize: '2rem' }}>
                  {text.split(/\s+/).filter((element) => element.length !== 0).length}
                </strong>
                <h5 className="mx-2 text-danger">words and</h5>
                <strong className="text-secondary" style={{ fontSize: '2rem' }}>
                  {text.length}
                </strong>
                <h5 className='text-danger mx-2'>characters</h5>
              </p>
              <p className="d-flex justify-content-center align-items-center mt-3">
                <span className="bg-dark text-white py-1 px-3 rounded-3">
                  <strong style={{ fontSize: '1.5rem' }}>
                    {(0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length).toFixed(2)}
                  </strong>
                </span>
                <h5 className="ml-2 text-danger">Minutes Read</h5>
              </p>
            </div>
          </div>
        </div>
      </div>

      <h3 className='text-danger my-5'>Text Preview</h3>
      <div
        className="preview-box p-4 border rounded-3 my-2"
        style={{
          backgroundColor: '#f8f9fa',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
          fontSize: '1.25rem',
          color: textColor,
          maxWidth: '100%',
          maxHeight: '200px',
          overflowY: 'auto',
          width: '100%',
          height: 'auto',
        }}
      >
        <p className='text-danger'>{text || "Start typing to preview your text."}</p>
      </div>

    </div>
  );
}
