import React from 'react';

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
