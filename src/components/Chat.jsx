// ChatBox.js (adjusted)
import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Chart.module.css';

export const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { sender: 'user', text: input };
    setMessages([...messages, newMessage]);
// Chat.jsx (add logs)
try {
    console.log('Sending message to /api/genai:', input);
    const response = await axios.post('/api/genai', { message: input });
    console.log('Response from /api/genai:', response.data);
    const replyMessage = { sender: 'bot', text: response.data.reply };
    setMessages([...messages, newMessage, replyMessage]);
  } catch (error) {
    console.error('Error fetching the reply:', error);
  }
  

    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
        

  return (
    
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card w-50">
        <div className="card-body d-flex flex-column">
          <div className="flex-grow-1 overflow-auto mb-3">
            {messages.map((msg, index) => (
              <div key={index} className={`p-2 my-2 rounded ${msg.sender === 'user' ? 'bg-primary text-white align-self-end' : 'bg-secondary text-white align-self-start'}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="input-group">
            <h5>Chat Box</h5>
            <input
              type="text"
              className="form-control"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
            />
       
            <button className="btn btn-primary" onClick={handleSendMessage}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

