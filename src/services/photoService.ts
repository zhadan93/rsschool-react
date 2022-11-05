import axios, { AxiosError } from 'axios';
import apiErrorsHandling from 'helpers/apiErrorsHandling';
import {
  QueryStringParameters,
  PhotoData,
  PhotosData,
  PhotoCardData,
  PhotosErrors,
} from 'types/serviceDataTypes';
import { Errors } from 'types/types';

class PhotosService {
  private basePhotosUrl = 'https://api.unsplash.com/';
  private endpoint = '/search/photos';
  private defaultQueryStringParameters = {
    client_id: 'g5dlozweELUlIRCcjh_j7NprkkIFelz2kPjcwpS9NnE',
  };

  getRequestUrl(queryStringParameters: QueryStringParameters): string {
    const query = queryStringParameters.query || 'mountain';
    const allQueryStringParameters = {
      ...this.defaultQueryStringParameters,
      query,
    };

    const url = `${this.basePhotosUrl}${this.endpoint.slice(1)}`;
    return Object.entries(allQueryStringParameters)
      .reduce((current, [key, value]) => current + `${key}=${value}&`, `${url}?`)
      .slice(0, -1);
  }

  async getPhotos(queryStringParameters: QueryStringParameters): Promise<PhotoCardData[] | Errors> {
    try {
      const { data } = await axios.get<PhotosData>(this.getRequestUrl(queryStringParameters), {
        headers: {
          'Accept-Version': 'v1',
        },
      });

      return data.results.map((item: PhotoData) => {
        const {
          id,
          created_at,
          width,
          height,
          likes,
          description,
          urls: { regular },
          user: { name },
          tags,
        } = item;

        return {
          id,
          created_at,
          width,
          height,
          likes,
          description,
          imgUrl: regular,
          userName: name,
          tags,
        };
      });
    } catch (error) {
      return apiErrorsHandling(error as AxiosError<PhotosErrors>);
    }
    return [];
  }
}

const photosService = new PhotosService();
export default photosService;
