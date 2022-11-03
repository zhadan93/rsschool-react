import React, { Component } from 'react';
import { FormCardDetails, CardFormDetails } from 'types/types';

import CardForm from 'components/Form/CardForm';
import FormCardList from 'components/Form/FormCardList';

type CreateCardProps = Record<string, string>;
type CreateCardState = { formCardsData: FormCardDetails[] };

class CreateCard extends Component<CreateCardProps, CreateCardState> {
  constructor(props: CreateCardProps) {
    super(props);
    this.state = {
      formCardsData: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(value: CardFormDetails) {
    this.setState((prevState) => ({
      formCardsData: [...prevState.formCardsData, { ...value, id: prevState.formCardsData.length }],
    }));
  }

  render() {
    return (
      <div data-testid="create-card" className="container">
        <CardForm onValueSubmit={this.handleSubmit} />
        <FormCardList formCardsData={this.state.formCardsData} />
      </div>
    );
  }
}

export default CreateCard;
