import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import PictureSearchCardList from '.';
import { testPicturesSearchCardsData } from '../../../test/testData';

describe('PictureSearchCardList component', () => {
  test('render PictureSearchCardList component', () => {
    render(<PictureSearchCardList picturesSearchCardsData={testPicturesSearchCardsData} />);
    expect(screen.getByTestId('pictures-search-cards')).toBeInTheDocument();
  });

  test('check card count of PictureSearchCardList component', () => {
    render(<PictureSearchCardList picturesSearchCardsData={testPicturesSearchCardsData} />);

    const cardsElement = screen.getAllByRole('listitem');
    expect(cardsElement.length).toBe(4);
  });
});
