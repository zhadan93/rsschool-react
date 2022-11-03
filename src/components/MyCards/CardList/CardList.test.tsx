import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import CardList from '.';
import { testCardsData } from '../../../test/testData';

describe('CardList component', () => {
  test('render CardList Component', () => {
    render(<CardList cardsData={testCardsData} />);

    const cardsElement = screen.getAllByRole('listitem');
    expect(cardsElement.length).toBe(2);
  });
});
