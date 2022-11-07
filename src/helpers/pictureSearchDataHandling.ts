import { PictureSearchTags } from 'types/serviceDataTypes';

class PictureSearchDataHandling {
  convertDate = (creationDate: string) => {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'June',
      'July',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec',
    ];
    const date = new Date(creationDate);

    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  };

  getTags = (tags: PictureSearchTags) => {
    return tags.reduce((prev, { title }) => prev + `#${title.split(' ').join('')} `, '').trim();
  };
}

export default new PictureSearchDataHandling();
