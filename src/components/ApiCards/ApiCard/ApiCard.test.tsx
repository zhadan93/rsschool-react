import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import ApiCard from '.';
import { testApiCardsData } from '../../../test/testData';

describe('ApiCard component', () => {
  const testApiCardData = testApiCardsData.at(0);

  test('render ApiCard component', () => {
    if (testApiCardData) {
      render(<ApiCard apiCardData={testApiCardData} />);
      expect(screen.getByTestId('api-card')).toBeInTheDocument();
      expect(screen.getByText(testApiCardData.likes)).toBeInTheDocument();
    }
  });

  test('check the popup display when clicking on the card', async () => {
    if (testApiCardData) {
      render(<ApiCard apiCardData={testApiCardData} />);

      await userEvent.click(screen.getByTestId('api-card'));
      expect(await screen.findByTestId('api-card-popup-wrapper')).toBeInTheDocument();
      expect(await screen.findByTestId('overlay')).toBeInTheDocument();
      expect(await screen.findByTestId('api-card-popup')).toBeInTheDocument();
    }
  });
});
