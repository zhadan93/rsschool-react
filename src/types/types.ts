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
  className?: string;
  placeholder?: string;
  type?: string;
  searchValue: string;
  onValueChange: (value: string) => void;
};
