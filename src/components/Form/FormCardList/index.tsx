import FormCard from '../FormCard';
import { FormCardDetails } from '../../../types/types';

import './FormCardList.scss';
import React from 'react';

interface FormCardListProps {
  formCardsData: FormCardDetails[];
}

const FormCardList = ({ formCardsData = [] }: FormCardListProps) => {
  return (
    <div data-testid="form-card-list" className="form-cards">
      <ul className="form-cards__list">
        {formCardsData.map((formCardData) => (
          <li className="form-cards__item" key={formCardData.id}>
            <FormCard formCardData={formCardData} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormCardList;
