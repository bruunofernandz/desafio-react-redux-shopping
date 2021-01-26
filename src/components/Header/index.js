import React from 'react';
import { useSelector } from 'react-redux';

import {
    HeaderContainer,
    LogoDiv,
    MenuContainer,
    CartContainer,
    CountText,
    LogoImg,
    CartImg,
    DiscoverText,
    MyCartText,
    CountContainer,
    GroupCartContainer
}
from './styles';

import Logo from '../../assets/images/logo.svg';
import Cart from '../../assets/images/shopping-cart-2.svg';

function Header({ discover = false, mycart = false }) {
    const state = useSelector(state => state.cart);

    return (
        <HeaderContainer>

            <a href="/">
            <LogoDiv>
                <LogoImg src={Logo} alt="Logotipo"/>
                <span>Earthgames</span>
            </LogoDiv>
            </a>

            <MenuContainer>
                <a href="/">
                    <DiscoverText color="#CECCCC">Discover</DiscoverText>
                </a>
                
                <a href="/cart">
                    <MyCartText>My cart</MyCartText>
                </a>

                <a href="/cart">
                    <GroupCartContainer>
                        <CartContainer>
                            <CartImg src={Cart} alt="shopping-cart"/>
                        </CartContainer>

                        <CountContainer>
                            <CountText>{state.items.length}</CountText>
                        </CountContainer>

                    </GroupCartContainer>
                </a>
            </MenuContainer>
        </HeaderContainer>
    );
}

export default Header;