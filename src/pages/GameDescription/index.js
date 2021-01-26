import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import CardDescription from '../../components/CardDescription';
import api from '../../api/api';
import { useParams } from 'react-router-dom';
import ReactNotification from 'react-notifications-component';

import { Container, BackgroundImage } from './styles';

function GameDescription() {
   const [game, setGame] = useState([]);
   const { id } = useParams();

   useEffect(() => {
      api.get(`/gamelist/${id}`).then(response => {
         const data = response.data;
         setGame([data]);
      })
   }, []);

  return (
      <>
        <Header />
        <ReactNotification />
        <Container>
           {game.map(item => {
              return (
                 <>
                  <BackgroundImage src={item.image} alt="gamedescription"/>
                  <CardDescription key={item.id} product={item} />
                 </>
              );
           })}
        </Container>
      </>
  );
}

export default GameDescription;