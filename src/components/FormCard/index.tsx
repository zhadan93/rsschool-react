import React from 'react';

import { FormCardDetails } from '../../types/types';

import './FormCard.scss';

type FormCardProps = {
  formCardData: FormCardDetails;
};

const FormCard = (props: FormCardProps) => {
  const { firstName, lastName, avatar, ...rest } = props.formCardData;
  const mapAttributes = new Map(Object.entries(rest));
  mapAttributes.delete('id');

  return (
    <div className="form-card">
      <div className="form-card__personal">
        <img src={avatar} alt="avatar" className="form-card__avatar" />
        <span className="form-card__name">
          {firstName} {lastName}
        </span>
      </div>
      <div className="form-card__characteristics">
        <h3 className="form-card__characteristic-title">Characteristics</h3>
        <ul className="form-card__characteristic-list">
          {Array.from(mapAttributes).map(([characteristic, value]) => (
            <li key={characteristic} className="form-card__characteristic-item">
              <span className="form-card__characteristic-key">{characteristic}</span>
              <span className="form-card__characteristic-value">{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FormCard;
