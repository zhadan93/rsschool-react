import * as React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import ApiCardPopup from '.';
import { testApiCardsData } from '../../../test/testData';

const close = () => {
  let isOpen = false;
  return jest.fn(() => (isOpen = !isOpen));
};

const testApiCardData = testApiCardsData.at(0);

describe('ApiCardPopup component', () => {
  test('render ApiCardPopup component', () => {
    if (testApiCardData) {
      const handleClose = close();
      render(<ApiCardPopup apiCardData={testApiCardData} onClose={handleClose} />);
      expect(screen.getByTestId('api-card-popup-wrapper')).toBeInTheDocument();
      expect(screen.getByTestId('overlay')).toBeInTheDocument();
      expect(screen.getByTestId('api-card-popup')).toBeInTheDocument();
    }
  });

  test('close popup by clicking on overlay', async () => {
    closePopup('overlay');
  });

  test('close popup by clicking on close button', () => {
    closePopup('api-card-popup-close-btn');
  });

  const closePopup = async (triggerId: string) => {
    if (testApiCardData) {
      const handleClose = close();

      render(<ApiCardPopup apiCardData={testApiCardData} onClose={handleClose} />);
      const trigger = screen.getByTestId(triggerId);
      await userEvent.click(trigger);

      expect(handleClose).toBeCalledTimes(1);

      waitForElementToBeRemoved([
        screen.getByTestId('api-card-popup-wrapper'),
        screen.getByTestId('overlay'),
        screen.getByTestId('api-card-popup'),
      ]).then(() => console.log('Element no longer in DOM'));
    }
  };
});
