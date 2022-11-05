import axios from 'axios';
import photoService from './photoService';
import { photoServiceData, photoData } from '../test/testData';

jest.mock('axios');

describe('photoService', () => {
  test('should search photos', async () => {
    const mockAxios = axios as jest.Mocked<typeof axios>;

    mockAxios.get.mockImplementationOnce(() => Promise.resolve({ data: photoServiceData }));
    const result = await photoService.getPhotos({ query: 'mountain' });

    await expect(mockAxios.get).toHaveBeenCalledWith(
      `https://api.unsplash.com/search/photos?client_id=g5dlozweELUlIRCcjh_j7NprkkIFelz2kPjcwpS9NnE&query=mountain`,
      { headers: { 'Accept-Version': 'v1' } }
    );

    await expect(result).toEqual(photoData);
  });
});
