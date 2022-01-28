import React from 'react';
import { useGetWidth } from '../../../hooks/useGetWidth';
import { Review, ReviewContent, ReviewsWrapper } from './styles';
import customer from '../../../assets/reviews/clienta.jpg';
import customer2 from '../../../assets/reviews/cliente2.jpg';
import customer3 from '../../../assets/reviews/cliente3.jpg';
import customer4 from '../../../assets/reviews/cliente4.jpg';
import customer5 from '../../../assets/reviews/cliente5.jpg';

export const Reviews = () => {
  const width = useGetWidth();
  console.log(width);
  return (
    <ReviewsWrapper id='ReviewsCarousel' size={width}>
      <Review className='client' size={width}>
        <ReviewContent>
          <img src={customer} alt='' />
          <div className='clientContent'>Datos y reseña</div>
        </ReviewContent>
      </Review>
      <Review className='client' size={width}>
        <ReviewContent>
          <img src={customer2} alt='' />
          <div className='clientContent'>Datos y reseña</div>
        </ReviewContent>
      </Review>
      <Review className='client' size={width}>
        <ReviewContent>
          <img src={customer3} alt='' />
          <div className='clientContent'>Datos y reseña</div>
        </ReviewContent>
      </Review>
      <Review className='client' size={width}>
        <ReviewContent>
          <img src={customer4} alt='' />
          <div className='clientContent'>Datos y reseña</div>
        </ReviewContent>
      </Review>
      <Review className='client' size={width}>
        <ReviewContent>
          <img src={customer5} alt='' />
          <div className='clientContent'>Datos y reseña</div>
        </ReviewContent>
      </Review>
    </ReviewsWrapper>
  );
};
