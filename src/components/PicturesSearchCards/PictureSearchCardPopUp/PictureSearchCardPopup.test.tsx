import * as React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import PictureSearchCardPopUp from '.';
import { testPicturesSearchCardsData } from '../../../test/testData';

const close = () => {
  let isOpen = false;
  return jest.fn(() => (isOpen = !isOpen));
};

const testPictureSearchCardData = testPicturesSearchCardsData.at(0);

describe('PictureSearchCardPopUp component', () => {
  test('render PictureSearchCardPopUp component', () => {
    if (testPictureSearchCardData) {
      const handleClose = close();
      render(
        <PictureSearchCardPopUp
          pictureSearchCardData={testPictureSearchCardData}
          onClose={handleClose}
        />
      );
      expect(screen.getByTestId('picture-search-card-popup-wrapper')).toBeInTheDocument();
      expect(screen.getByTestId('overlay')).toBeInTheDocument();
      expect(screen.getByTestId('picture-search-card-popup')).toBeInTheDocument();
    }
  });

  test('close popup by clicking on overlay', async () => {
    closePopup('overlay');
  });

  test('close popup by clicking on close button', () => {
    closePopup('picture-search-card-popup-close-btn');
  });

  const closePopup = async (triggerId: string) => {
    if (testPictureSearchCardData) {
      const handleClose = close();

      render(
        <PictureSearchCardPopUp
          pictureSearchCardData={testPictureSearchCardData}
          onClose={handleClose}
        />
      );
      const trigger = screen.getByTestId(triggerId);
      await userEvent.click(trigger);

      expect(handleClose).toBeCalledTimes(1);

      waitForElementToBeRemoved([
        screen.getByTestId('picture-search-card-popup-wrapper'),
        screen.getByTestId('overlay'),
        screen.getByTestId('picture-search-card-popup'),
      ]).then(() => console.log('Element no longer in DOM'));
    }
  };
});
