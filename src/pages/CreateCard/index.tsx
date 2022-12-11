import React, { useState } from 'react';
import { FormCardDetails, CardFormDetails } from 'types/types';

import CardForm from 'components/Form/CardForm';
import FormCardList from 'components/Form/FormCardList';

type CreateCardProps = Record<string, string>;

const CreateCard: React.FC<CreateCardProps> = () => {
  const [data, setData] = useState<FormCardDetails[]>([]);

  const handleSubmit = (value: CardFormDetails) => {
    setData((prevState) => [...prevState, { ...value, id: prevState.length }]);
  };

  return (
    <div data-testid="create-card" className="container">
      <CardForm onValueSubmit={handleSubmit} />
      <FormCardList formCardsData={data} />
    </div>
  );
};

export default CreateCard;
