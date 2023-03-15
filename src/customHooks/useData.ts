import { useState, useEffect } from 'react';

import picturesSearchService from 'services/picturesSearchService';
import { PictureSearchCardListData } from 'types/serviceDataTypes';
import { Errors } from 'types/types';

export default function useData(
  query: string
): [PictureSearchCardListData[] | null, boolean, null | Errors] {
  const [data, setData] = useState<PictureSearchCardListData[] | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [errors, setErrors] = useState<null | Errors>(null);

  useEffect(() => {
    let ignore = false;

    const searchPictures = async () => {
      const searchData = await picturesSearchService.getPictures({ query });

      const isArray = Array.isArray(searchData);
      const searchPictureData = isArray ? searchData : null;
      const searchErrors = isArray ? null : searchData;

      if (!ignore) {
        setData(searchPictureData);
        setErrors(searchErrors);
        setIsLoaded(false);
      }
    };

    setIsLoaded(true);
    searchPictures();

    return () => {
      ignore = true;
    };
  }, [query]);

  return [data, isLoaded, errors];
}
