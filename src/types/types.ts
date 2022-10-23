import { ForwardedRef, ChangeEvent, DetailedHTMLProps, HTMLAttributes } from 'react';

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

export type InputProps = {
  id?: string;
  label?: string;
  className?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onValueChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  inputRef?: ForwardedRef<HTMLInputElement>;
  accept?: string;
  optionLabels?: string[];
  isSwitch?: boolean;
  error?: string;
  name?: string;
};

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
