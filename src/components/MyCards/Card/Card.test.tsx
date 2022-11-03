import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import Card from '.';
import { testCardsData } from '../../../test/testData';

describe('Card component', () => {
  const testCardData = testCardsData.at(0);

  test('render Card Component', () => {
    if (testCardData) {
      render(<Card cardData={testCardData} />);
      expect(screen.getByText(testCardData.country)).toBeInTheDocument();
    }
  });

  test('Check Card Component state', async () => {
    const favoriteButtonClassName = 'favorite-icon--active';
    if (testCardData) {
      render(<Card cardData={testCardData} />);
      const favoriteButton = screen.getByRole('button');
      expect(favoriteButton.firstElementChild).toHaveClass(favoriteButtonClassName);

      await userEvent.click(favoriteButton);

      expect(favoriteButton.firstElementChild).not.toHaveClass(favoriteButtonClassName);
    }
  });
});
