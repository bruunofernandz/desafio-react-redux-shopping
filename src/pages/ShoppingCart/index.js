import React, {useState} from 'react';
import Header from '../../components/Header/';
import CartProductCard from '../../components/CartProductCard';
import BackImgIcon from '../../assets/images/arrow.svg';

import { 
  ShoppingCartContainer,
  BackToShoppingContainer,
  BackIcon,
  BackText,
  Container,
  ContainerTotal,
  TotalValue,
  QuantityTotal,
  ContainerCartEmpty
 } from './styles';

import { useSelector } from 'react-redux';

function ShoppingCart() {
  const store = useSelector(store => store.cart.items);
  const [games, setGames] = useState(store);

  console.log(games);

  function calculateTotal() {
    let total = 0;

    for (let index = 0; index < games.length; index++) {
      total = total + games[index].subtotal;
    }

    return total;
  }

  function calculateQuantity() {
    let quant = 0;

    for (let index = 0; index < games.length; index++) {
      quant = quant + games[index].quantity;
    }

    return quant;
  }

  return (
      <>
        <Header />
        <Container>
          <ShoppingCartContainer>
              <BackToShoppingContainer>
                <BackIcon src={BackImgIcon} alt="back icon"/>
              <a href="/">
                <BackText>Back to shopping</BackText>
              </a>

              </BackToShoppingContainer>
            {games.map(
            game => games.length > 0 ? <CartProductCard 
            key={game.product.id}  
            title={game.product.title} 
            price={game.product.price} 
            quantity={game.quantity} 
            product={game.product}
            /> : <></>)
          }

          {
            games.length > 0 ? <ContainerTotal>
            <TotalValue>TOTAL PRICE: US$ {
                calculateTotal()
              }</TotalValue>
            <QuantityTotal>TOTAL QUANTITY: {calculateQuantity()}</QuantityTotal>
          </ContainerTotal> : 

          <ContainerCartEmpty>
            <span>You don't have items in your cart :(</span>
          </ContainerCartEmpty>
          }

          </ShoppingCartContainer>
        </Container>
      </>
  );
}

export default ShoppingCart;