import React from 'react';

import Searchbar from 'components/Searchbar';
import CardList from 'components/MyCards/CardList';
import CardsData from 'data/cardsData';

const Home = (): JSX.Element => {
  return (
    <div data-testid="home" className="container">
      <CardList cardsData={CardsData} />
    </div>
  );
};

export default Home;

//<Searchbar />
