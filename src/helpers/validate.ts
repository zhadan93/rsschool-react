export const isValidName = (value: string): boolean => /^[a-z]{2,}$/i.test(value.trim());

export const isValidUploadImg = (value: string): boolean =>
  /\.(png|svg|jpg|jpeg|gif)$/i.test(value);

export const isValidWithDefaultValue = (value: string, defaultValue?: string): boolean =>
  typeof defaultValue === 'string' ? value !== defaultValue : Boolean(value);
