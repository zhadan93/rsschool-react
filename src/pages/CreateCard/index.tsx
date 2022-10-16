import React from 'react';

import CardForm from 'components/CardForm';

const CreateCard = (): JSX.Element => {
  return (
    <div data-testid="createCard" className="create-card">
      <div className="container">
        <CardForm />
      </div>
    </div>
  );
};

export default CreateCard;
