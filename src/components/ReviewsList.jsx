import React from 'react';
import ReviewCard from './ReviewCard';

const reviews = [
  { id: 1, name: 'Анна', rating: 5, text: 'Отличный виджет! Всё работает быстро и красиво.' },
  { id: 2, name: 'Михаил', rating: 4, text: 'Хороший функционал, удобно настраивать.' },
  { id: 3, name: 'Елена', rating: 5, text: 'Поддержка супер, помогли с установкой.' }
];

function ReviewsList() {
  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Отзывы наших клиентов</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {reviews.map(review => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </div>
    </div>
  );
}

export default ReviewsList;