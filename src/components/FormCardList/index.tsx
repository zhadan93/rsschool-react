import React, { Component } from 'react';

import FormCard from 'components/FormCard';
import { FormCardDetails } from '../../types/types';

import './FormCardList.scss';

interface FormCardListProps {
  formCardsData: FormCardDetails[];
}

const FormCardList = (props: FormCardListProps) => {
  return (
    <div data-testid="form-card-list" className="form-cards">
      <ul className="form-cards__list">
        {props.formCardsData.map((formCardData) => (
          <li className="form-cards__item" key={formCardData.id}>
            <FormCard formCardData={formCardData} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormCardList;
