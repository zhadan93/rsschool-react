export interface CardDetails {
  id: number;
  name: string;
  description: string;
  volume: number;
  material: string;
  country: string;
  cost: number;
  favorite: boolean;
}

export interface FormCardDetails {
  id: number;
  firstName: string;
  lastName: string;
  birthday: string;
  sex: string;
  country: string;
  avatar: string;
}

export type CardFormDetails = Omit<FormCardDetails, 'id'>;
