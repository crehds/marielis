import React from 'react';
import { ReviewContent, ReviewDetails, ReviewWrapper } from './styles';

export const Review = ({
  size,
  customerSrc,
  customerName,
  customerOrder,
  customerReview
}) => {
  return (
    <ReviewWrapper className='client' size={size}>
      <ReviewContent>
        <img src={customerSrc} alt='a customer' />
        <ReviewDetails className='clientContent' size={size}>
          <h3>{customerName}</h3>
          <p>{customerOrder}</p>
          <p>{customerReview}</p>
        </ReviewDetails>
      </ReviewContent>
    </ReviewWrapper>
  );
};
