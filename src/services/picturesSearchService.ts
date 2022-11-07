import axios, { AxiosError } from 'axios';
import pictureSearchErrorsHandling from 'helpers/pictureSearchErrorsHandling';
import {
  QueryStringParameters,
  PictureSearchData,
  PicturesSearchData,
  PictureSearchCardListData,
  PictureSearchErrors,
} from 'types/serviceDataTypes';
import { Errors } from 'types/types';

class PicturesSearchService {
  private baseSearchPicturesUrl = 'https://api.unsplash.com/';
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

    const url = `${this.baseSearchPicturesUrl}${this.endpoint.slice(1)}`;
    return Object.entries(allQueryStringParameters)
      .reduce((current, [key, value]) => current + `${key}=${value}&`, `${url}?`)
      .slice(0, -1);
  }

  async getPictures(
    queryStringParameters: QueryStringParameters
  ): Promise<PictureSearchCardListData[] | Errors> {
    try {
      const { data } = await axios.get<PicturesSearchData>(
        this.getRequestUrl(queryStringParameters),
        {
          headers: {
            'Accept-Version': 'v1',
          },
        }
      );

      return data.results.map((item: PictureSearchData) => {
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
      return pictureSearchErrorsHandling(error as AxiosError<PictureSearchErrors>);
    }
    return [];
  }
}

const picturesSearchService = new PicturesSearchService();
export default picturesSearchService;
