const validateName = (value: string) =>
  /^[a-z]{2,}$/i.test(value.trim()) || 'Only Alphabets and more then one characters';

export const firstNameOptions = {
  required: 'You need to enter first name',
  validate: {
    acceptedFormats: validateName,
  },
};

export const lastNameOptions = {
  required: 'You need to enter last name',
  validate: {
    acceptedFormats: validateName,
  },
};

export const dateOptions = {
  required: 'You need to choose date',
};

export const countryOptions = {
  required: 'You need to choose country',
  validate: (value: string) => value !== 'Choose country' || 'You need to choose country',
};

export const avatarOptions = {
  required: 'You need to upload avatar',
  validate: {
    acceptedFormats: (files: FileList) => {
      return /\.(png|svg|jpg|jpeg|gif)$/i.test(files[0].name) || 'Only image';
    },
  },
};

export const agreesOptions = {
  required: 'You need to agree',
};
