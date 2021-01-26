import React from 'react';
import AddCartButton from '../../components/AddCartButton';

import { CardContainer, Title, Description, Price } from './styles';

function CardDescription({ product }) {

return (
   <>
      <CardContainer>
         <Title>{product.title}</Title>
         <Description>{product.description}</Description>
         <Price>{product.price}</Price>

         <AddCartButton product={product}/>
      </CardContainer>
   </>
  );
}

export default CardDescription;