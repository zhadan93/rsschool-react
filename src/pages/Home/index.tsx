import React from 'react';

import CardList from 'components/CardList';
import CardsData from 'data/cardsData';
import Searchbar from 'components/Searchbar';

const Home = (): JSX.Element => {
  return (
    <div data-testid="home" className="container">
      <Searchbar />
      <CardList cardsData={CardsData} />
    </div>
  );
};

export default Home;
