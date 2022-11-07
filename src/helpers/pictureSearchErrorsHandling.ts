import { AxiosError } from 'axios';
import { PictureSearchErrors } from 'types/serviceDataTypes';

const pictureSearchErrorsHandling = (error: AxiosError<PictureSearchErrors>) => {
  const { response, request } = error;

  if (response) {
    const { status, data } = response;
    return {
      status,
      content: data.errors,
    };
  } else if (request) {
    return {
      title: 'Oops!',
      content: ["Server isn't responding. Please, try later"],
    };
  } else {
    const { status, message } = error;
    return {
      status,
      content: [message],
    };
  }
};

export default pictureSearchErrorsHandling;
