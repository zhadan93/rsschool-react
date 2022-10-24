export const isValidName = (value: string): boolean => /^[a-z]{2,}$/i.test(value.trim());

export const isValidUploadImg = (value: File | undefined) =>
  value && /\.(png|svg|jpg|jpeg|gif)$/i.test(value.name);
