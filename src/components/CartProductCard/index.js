import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { 
    ProductContainer,
    InfoContainer,
    TitleText,
    PriceText,
    QuantityText,
    ChangeQuantityContainer,
    SubtractContainer,
    SubtractButton,
    SubtractIcon,
    AddContainer,
    AddButton,
    AddIcon
   } from './styles';

import AddImageIcon from '../../assets/images/add.svg';
import SubtractImageIcon from '../../assets/images/minus-sign.svg';

import { subtractToCart, removeProduct, addQuantityToCart } from '../../store/modules/cart/actions';

function CartProductCard({ title, price, quantity, product }) {
    const dispatch = useDispatch();

    const handleSubtractToCart = useCallback((item) => {
        dispatch(subtractToCart(item));
    }, [dispatch]);

    const handleRemoveToCart = useCallback((item) => {
        dispatch(removeProduct(item));
    }, [dispatch]);

    const handleAddQuantityToCart = useCallback((item) => {
        dispatch(addQuantityToCart(item));
    }, [dispatch]);

return (
    <>
        <ProductContainer>

            <InfoContainer>
            <TitleText>{title}</TitleText>
            <PriceText>US$ {price}</PriceText>
            <QuantityText>Quantity: {quantity}</QuantityText>
            <a onClick={() => handleRemoveToCart(product)} href="/cart">Remove</a>
            </InfoContainer>

            <ChangeQuantityContainer>
            <SubtractContainer>
                <SubtractButton onClick={() => handleSubtractToCart(product)}>
                    <SubtractIcon src={SubtractImageIcon} alt="subtract"/>
                </SubtractButton>
                <span>sub</span>
            </SubtractContainer>

            <AddContainer>
                <AddButton onClick={() => handleAddQuantityToCart(product)}>
                    <AddIcon src={AddImageIcon} alt="add"/>
                </AddButton>
                <span>add</span>
            </AddContainer>
            </ChangeQuantityContainer>

        </ProductContainer>
    </>
  );
}

export default CartProductCard;