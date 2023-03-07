import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

function Footer() {
  return (
    <footer>
      <p>This is my footer.</p>
    </footer>
  );
}

export default Footer;
