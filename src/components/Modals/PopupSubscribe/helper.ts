export interface DefaultValues {
  firstName: string;
  lastName: string;
}

export const defaultValues = {
  firstName: '',
  lastName: '',
};

export type Inputs = { label: string; name: 'firstName' | 'lastName' };

export const inputs: Inputs[] = [
  { label: 'Имя', name: 'firstName' },
  { label: 'Фамилия', name: 'lastName' },
];
