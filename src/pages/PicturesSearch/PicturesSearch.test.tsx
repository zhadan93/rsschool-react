import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import React from 'react';
import PicturesSearch from '.';

import {
  testPicturesSearchServiceData,
  testCatPicturesSearchData,
  testPicturesSearchErrors,
} from '../../test/testData';
import userEvent from '@testing-library/user-event';

jest.mock('axios');
const mockAxios = axios as jest.Mocked<typeof axios>;

describe('PicturesSearch component', () => {
  test('search photos from API when mounting PicturesSearch component', async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: testPicturesSearchServiceData })
    );

    render(<PicturesSearch />);
    expect(screen.getByTestId('search')).toBeInTheDocument();
    expect(await screen.findAllByRole('listitem')).toHaveLength(1);

    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });

  test('search photos from API', async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: testPicturesSearchServiceData })
    );

    render(<PicturesSearch />);
    const searchbar = screen.getByTestId('search');

    expect(searchbar).toBeInTheDocument();
    expect(await screen.findAllByRole('listitem')).toHaveLength(1);

    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: testCatPicturesSearchData })
    );

    userEvent.type(searchbar, 'cat{enter}');

    await waitFor(() => {
      expect(screen.getByText(`${testCatPicturesSearchData.results[0].likes}`)).toBeInTheDocument();
    });

    expect(await screen.findAllByRole('listitem')).toHaveLength(2);

    expect(mockAxios.get).toHaveBeenCalledTimes(2);
  });

  test('render authorization error when searching for photos', async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: testPicturesSearchServiceData })
    );

    render(<PicturesSearch />);
    const searchbar = screen.getByTestId('search');

    expect(searchbar).toBeInTheDocument();
    expect(await screen.findAllByRole('listitem')).toHaveLength(1);

    const errorStatus = 401;

    mockAxios.get.mockImplementationOnce(() =>
      Promise.reject({
        response: { data: testPicturesSearchErrors, status: errorStatus },
      })
    );

    userEvent.type(searchbar, 'fff{enter}');

    await waitFor(() => {
      screen.debug();
      expect(screen.getByText(`${errorStatus}`)).toBeInTheDocument();
    });

    expect(mockAxios.get).toHaveBeenCalledTimes(2);
  });
});
