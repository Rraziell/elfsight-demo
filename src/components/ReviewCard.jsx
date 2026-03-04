import React from 'react';
import './ReviewCard.css';

function ReviewCard({ name, rating, text, date }) {
  // Создаем массив звезд для анимации
  const stars = Array(rating).fill('⭐').map((star, index) => (
    <span key={index}>{star}</span>
  ));

  return (
    <div className="review-card">
      <div className="review-header">
        <h3>{name}</h3>
        <div className="rating">
          {stars}
        </div>
      </div>
      <p className="review-text">{text}</p>
      {date && <span className="review-date">{date}</span>}
    </div>
  );
}

export default ReviewCard;