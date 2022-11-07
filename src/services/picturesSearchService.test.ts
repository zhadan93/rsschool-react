import axios from 'axios';
import picturesSearchService from './picturesSearchService';
import { testPicturesSearchServiceData, testPicturesSearchData } from '../test/testData';

jest.mock('axios');

describe('photoService', () => {
  test('should search photos', async () => {
    const mockAxios = axios as jest.Mocked<typeof axios>;

    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: testPicturesSearchServiceData })
    );
    const result = await picturesSearchService.getPictures({ query: 'mountain' });

    await expect(mockAxios.get).toHaveBeenCalledWith(
      `https://api.unsplash.com/search/photos?client_id=g5dlozweELUlIRCcjh_j7NprkkIFelz2kPjcwpS9NnE&query=mountain`,
      { headers: { 'Accept-Version': 'v1' } }
    );

    await expect(result).toEqual(testPicturesSearchData);
  });
});
