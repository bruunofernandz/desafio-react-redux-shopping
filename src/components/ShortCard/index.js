import React from 'react';
import { Link } from 'react-router-dom';

import {
    Card,
    GameImg,
    Title,
    Price,
    GroupContainer,
} from './styles';

import AddToCartButton from '../AddCartButton/index';

function ShortCard({ product }) {
   const linkStyle = {
      textDecoration: 'none',
      textAlign: 'center'
   };

    return (
        <Card>
            <GameImg src={product.image} alt="Spider man"/>

            <GroupContainer>
                <Link 
                  to={`/gamelist/${product.id}`}
                  style={linkStyle}
                >
                  <Title>{product.title}</Title>
                </Link>

                  <Price>US$ {product.price}</Price>
                <AddToCartButton product={product}/>
            </GroupContainer>
        </Card>
    );
}

export default ShortCard;