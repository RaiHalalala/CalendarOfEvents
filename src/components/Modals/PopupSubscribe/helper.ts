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
  { label: 'First Name', name: 'firstName' },
  { label: 'Last Name', name: 'lastName' },
];
