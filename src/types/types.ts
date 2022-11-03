import { ReactNode } from 'react';

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

export interface Errors {
  title?: string;
  content?: string[];
  status?: number;
  className?: string;
  children?: ReactNode;
}
