import React from 'react';
import ReviewsList from './components/ReviewsList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Elfsight Widget Demo</h1>
        <p>Демонстрация виджета отзывов на React</p>
      </header>
      
      <ReviewsList />
      
      <footer>
        Сделано для отклика в Elfsight
      </footer>
    </div>
  );
}

export default App;