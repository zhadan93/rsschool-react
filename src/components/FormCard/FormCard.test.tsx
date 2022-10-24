import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import FormCard from '../FormCard';
import { testFormCardsData } from '../../test/testData';

describe('FormCard component', () => {
  const testFormCardData = testFormCardsData.at(1);

  test('render FormCard Component', () => {
    if (testFormCardData) {
      const { firstName, lastName, birthday, sex, country } = testFormCardData;

      render(<FormCard formCardData={testFormCardData} />);
      expect(screen.getByTestId('form-card')).toBeInTheDocument();

      expect(screen.getByText(`${firstName} ${lastName}`)).toBeInTheDocument();
      expect(screen.getByText(birthday)).toBeInTheDocument();
      expect(screen.getByText(sex)).toBeInTheDocument();
      expect(screen.getByText(country)).toBeInTheDocument();
      expect(screen.getByRole('img')).toBeInTheDocument();
    }
  });
});
