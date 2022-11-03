import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import FormCardList from '.';
import { testFormCardsData } from '../../../test/testData';

describe('FormCardList component', () => {
  test('render FormCardList Component', () => {
    render(<FormCardList formCardsData={testFormCardsData} />);
    expect(screen.getByTestId('form-card-list')).toBeInTheDocument();

    const cardsElement = screen.getAllByText(/country/i);
    expect(cardsElement.length).toBe(3);
  });
});
