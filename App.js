import React, { useState, useEffect } from 'react';
import './style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [message, setMessage] = useState('');
  const [signature, setSignature] = useState('');
  const [isValid, setIsValid] = useState(null);
  const [timestamp, setTimestamp] = useState(null);

  // Load history from localStorage initially
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem('dss_history');
    return saved ? JSON.parse(saved) : [];
  });

  const handleSign = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/sign', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
      });
      const data = await response.json();
      const currentTime = new Date().toLocaleString();

      setSignature(data.signature);
      setTimestamp(currentTime);
      toast.success('✅ Message signed!');

      // Save to history
      const newEntry = {
        msg: message,
        sig: data.signature,
        time: currentTime
      };
      const updatedHistory = [...history, newEntry];
      setHistory(updatedHistory);
      localStorage.setItem('dss_history', JSON.stringify(updatedHistory));
    } catch (error) {
      toast.error('❌ Signing failed!');
    }
  };

  const handleVerify = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, signature })
      });
      const data = await response.json();
      setIsValid(data.valid);
      if (data.valid) {
        toast.success('✅ Signature is valid!');
      } else {
        toast.error('❌ Signature is invalid!');
      }
    } catch (error) {
      toast.error('❌ Verification failed!');
    }
  };

  const handleClear = () => {
    setMessage('');
    setSignature('');
    setIsValid(null);
    setTimestamp(null);
    toast.info('🧹 Cleared');
  };

  const handleClearHistory = () => {
    localStorage.removeItem('dss_history');
    setHistory([]);
    toast.info('🗑️ History cleared');
  };

  return (
    <div className="container">
      <h1>Digital Signature App</h1>

      <textarea
        rows="4"
        maxLength={300}
        placeholder="Enter your message (max 300 characters)"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <p style={{ textAlign: 'right', fontSize: '0.9rem', color: '#666' }}>
        {message.length}/300
      </p>

      <div className="button-group">
        <button onClick={handleSign}>Sign Message</button>
        <button onClick={handleVerify}>Verify Signature</button>
        <button onClick={handleClear}>Clear</button>
        <button onClick={handleClearHistory}>Clear History</button>
      </div>

      {signature && (
        <div className="signature-box">
          <h3>Signature:</h3>
          <textarea
            readOnly
            rows="5"
            value={signature}
            style={{ width: '100%', marginBottom: '10px' }}
          />
          <button onClick={() => {
            navigator.clipboard.writeText(signature);
            toast.info('📋 Signature copied!');
          }}>
            Copy Signature
          </button>
        </div>
      )}

      {timestamp && (
        <p><b>Signed At:</b> {timestamp}</p>
      )}

      {isValid !== null && (
        <p style={{ fontSize: '1.2rem', marginTop: '10px' }}>
          <b>Verification Result:</b> {isValid ? '✅ Valid' : '❌ Invalid'}
        </p>
      )}

      {history.length > 0 && (
        <div className="history-section">
          <h2>🕘 Signing History</h2>
          {history.map((entry, index) => (
            <div key={index} className="history-item">
              <p><b>📩 Message:</b> {entry.msg}</p>
              <p><b>🔏 Signature:</b> {entry.sig}</p>
              <p><b>🕒 Signed At:</b> {entry.time}</p>
              <hr />
            </div>
          ))}
        </div>
      )}

      <ToastContainer />
    </div>
  );
}

export default App;
