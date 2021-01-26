import React, { useEffect, useState } from 'react';
import ReactNotification from 'react-notifications-component';
import { 
  Container, 
  SearchIcon, 
  ButtonSearch, 
  FilterContainer, 
  InputSearch,
  ControllerGamerContainer,
  CenterContainer,
  TitleController,
  PriceController,
  Subtitle,
  ComingSoonContainer,
  GameListContainer
} from './styles';
import SearchIconSvg from '../../assets/images/search.svg';
import Header from '../../components/Header/index';
import ExpansiveCard from '../../components/ExpansiveCard/index';
import ShortCard from '../../components/ShortCard/index';

import api from '../../api/api';

function App() {
  const [gameList, setGameList] = useState([]);
  const [search, setSearch] = useState('');

  const filteredGames = gameList.filter(game => {
    if(game.title.toLowerCase().includes(search.toLowerCase()))
      return game.title.toLowerCase().includes(search.toLowerCase());
    else if(game.id.toLowerCase().includes(search.toLowerCase()))
      return game.id.toLowerCase().includes(search.toLowerCase());
  })

  useEffect(() => {
    api.get('/gamelist').then(response => {
      const gameArrayList = response.data;

      setGameList(gameArrayList);
    })
  }, []);

  return (
  <Container>
      <ReactNotification />

      <Header />

        <ControllerGamerContainer>
            <CenterContainer>
              <TitleController>Dualshock 4</TitleController>
              <PriceController>US$ 89.99</PriceController>
            </CenterContainer>
        </ControllerGamerContainer>

        <Subtitle>Coming soon</Subtitle>

        <ComingSoonContainer>
          {gameList
          .map(game => {
            if(game.released === false) {
              return <ExpansiveCard 
              key={game.id}
              title={game.title}
              price={game.price}
              urlImage={game.image}
              product={game}
              /> 
            }
          })}
        </ComingSoonContainer>

        <Subtitle>Explore Top Games</Subtitle>

        <FilterContainer>
          <SearchIcon src={SearchIconSvg} alt="Search Icon"/>

          <InputSearch onChange={e => setSearch(e.target.value)}/>

          {/* <ButtonSearch>Search</ButtonSearch> */}
        </FilterContainer>

        <GameListContainer>
          {filteredGames
            .map(game => {
              if(game.released === true) {
                return (
                <ShortCard 
                  key={game.id} 
                  title={game.title} 
                  price={game.price} 
                  urlImage={game.image}
                  product={game}
                />
               )
              }
          })}
        </GameListContainer>
  </Container>
  );
}

export default App;
