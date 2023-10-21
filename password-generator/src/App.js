import './App.css';
import React, { useState } from 'react';
import MessageComponent from './components/Message';
function App() {
  const [length,setLength] = useState(8);
  const [upperCase, setUpperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [numbers, setNumbers] = useState(false);
  const [specialCharacters, setSpecialCharacters] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("Failed To Copy Password!");
  const [messageType, setMessageType] = useState("error")
  const openSuccessAlert = () => {
    setOpen(true);
    setMessage("Password copied to clipboard!");
    setMessageType("success");
  };
  const openFailureAlert = () => {
    setOpen(true);
    setMessage("Failed To Copy Password!");
    setMessageType("error");
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  function generatePassword(){

  }
  function handleChange(event){
    setLength(event.target.value);
  }
  return (
    <div className="App">
      <div className='options'>
        <div className='option'>
          <label>Length</label>
          <input type='number' id='length' min='4' max='20' value={length} onChange={handleChange} />
        </div>
        <div className='option'>
          <label>A-Z</label>
          <input type='checkbox' id='uppercase' checked={upperCase} onChange={(e) => setUpperCase(e.target.checked)} />
        </div>
        <div className='option'>
          <label>a-z</label>
          <input type='checkbox' id='lowercase' checked={lowerCase} onChange={(e) => setLowerCase(e.target.checked)} />
        </div>
        <div className='option'>
          <label>0-9</label>
          <input type='checkbox' id='numbers' checked={numbers} onChange={(e) => setNumbers(e.target.checked)} />
        </div>
        <div className='option'>
          <label>!@#$%^&*</label>
          <input type='checkbox' id='symbols' checked={specialCharacters} onChange={(e) => setSpecialCharacters(e.target.checked)} />
        </div>
      </div>
      <button className='btn' id='generate' onClick={generatePassword}>
        Generate Password
      </button>

      {/* --Uncomment to test Snackbar in Message.js */}

      <button className='btn' id='successCopy' onClick={openSuccessAlert}>
        Copy Password Successful
      </button>
      <button className='btn' id='failCopy' onClick={openFailureAlert}>
        Copy Password Failed
      </button>
      <MessageComponent open={open} handleClose={handleClose} message={message} messageType={messageType}/>
    </div>
  );
}

export default App;