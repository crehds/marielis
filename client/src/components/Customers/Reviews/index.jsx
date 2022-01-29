import React from 'react';
import { useGetWidth } from '../../../hooks/useGetWidth';
import { ReviewsWrapper } from './styles';
import { Review } from './components/Review';

import customer1 from '../../../assets/reviews/cliente1.jpg';
import customer2 from '../../../assets/reviews/cliente2.jpg';
import customer3 from '../../../assets/reviews/cliente3.jpg';
import customer4 from '../../../assets/reviews/cliente4.jpg';
import customer5 from '../../../assets/reviews/cliente5.jpg';

const CUSTOMERS = [
  {
    name: 'María del Carmen',
    src: customer1,
    order: 'Bocaditos',
    review: 'Excelente presentación y degustación'
  },
  {
    name: 'José Luis',
    src: customer2,
    order: 'Alfajores',
    review: 'Excelente presentación y degustación'
  },
  {
    name: 'Antonio Rodríguez',
    src: customer3,
    order: 'Tartaleta',
    review: 'Excelente presentación y degustación'
  },
  {
    name: 'Edson Gutierrez',
    src: customer4,
    order: 'Alfajores',
    review: 'Excelente presentación y degustación'
  },
  {
    name: 'Mishel Fernandez',
    src: customer5,
    order: 'Torta y bocaditos',
    review: 'Excelente presentación y degustación'
  }
];

export const Reviews = () => {
  const width = useGetWidth();
  return (
    <ReviewsWrapper id='ReviewsCarousel' size={width}>
      {[1, 2, 3, 4, 5].map((e, i) => (
        <Review
          size={width}
          key={`review-${i}`}
          customerSrc={CUSTOMERS[i].src}
          customerName={CUSTOMERS[i].name}
          customerOrder={CUSTOMERS[i].order}
          customerReview={CUSTOMERS[i].review}
        />
      ))}
    </ReviewsWrapper>
  );
};
