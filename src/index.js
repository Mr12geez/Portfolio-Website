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

function App() {
  return (
    <div className="App">
      <header>
        <h1>My Portfolio</h1>
      </header>
      <main>
        © 2022 CHIJIOKE OBIORAH, ALL RIGHTS RESERVED
      </main>
      <Footer />
    </div>
  );
}

export default App;

