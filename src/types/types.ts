import { ForwardedRef } from 'react';

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
  onValueChange?: (value: string | boolean) => void;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  inputRef?: ForwardedRef<HTMLInputElement>;
  accept?: string;
  optionLabels?: string[];
  isSwitch?: boolean;
};
