import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import PictureSearchCard from '.';
import { testPicturesSearchCardsData } from '../../../test/testData';

describe('PictureSearchCard component', () => {
  const testPictureSearchCardData = testPicturesSearchCardsData.at(0);

  test('render PictureSearchCard component', () => {
    if (testPictureSearchCardData) {
      render(<PictureSearchCard pictureSearchCardData={testPictureSearchCardData} />);
      expect(screen.getByTestId('picture-search-card')).toBeInTheDocument();
      expect(screen.getByText(testPictureSearchCardData.likes)).toBeInTheDocument();
    }
  });

  test('check the popup display when clicking on the PictureSearchCard', async () => {
    if (testPictureSearchCardData) {
      render(<PictureSearchCard pictureSearchCardData={testPictureSearchCardData} />);

      await userEvent.click(screen.getByTestId('picture-search-card'));
      expect(await screen.findByTestId('picture-search-card-popup-wrapper')).toBeInTheDocument();
      expect(await screen.findByTestId('overlay')).toBeInTheDocument();
      expect(await screen.findByTestId('picture-search-card-popup')).toBeInTheDocument();
    }
  });
});
