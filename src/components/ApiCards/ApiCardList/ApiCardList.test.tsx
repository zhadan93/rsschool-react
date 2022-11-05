import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import ApiCardList from '.';
import { testApiCardsData } from '../../../test/testData';

describe('ApiCardList component', () => {
  test('render CardList component', () => {
    render(<ApiCardList apiCardsData={testApiCardsData} />);
    expect(screen.getByTestId('api-cards')).toBeInTheDocument();
  });

  test('check card count of ApiCardList component', () => {
    render(<ApiCardList apiCardsData={testApiCardsData} />);

    const cardsElement = screen.getAllByRole('listitem');
    expect(cardsElement.length).toBe(4);
  });
});
