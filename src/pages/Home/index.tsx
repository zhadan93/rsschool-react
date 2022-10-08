import React from 'react';

import CardList from 'components/CardList';
import CardData from 'data/cardData';
import Searchbar from 'components/Searchbar';

const Home = (): JSX.Element => {
  return (
    <div>
      <div className="container">
        <Searchbar />
        <CardList data={CardData} />
      </div>
    </div>
  );
};

export default Home;
