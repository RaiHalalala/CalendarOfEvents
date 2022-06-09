import { format } from 'date-fns';

export const setFormatDate = (date: Date, formatDate?: string) =>
  format(date, formatDate || 'dd.MM.yyyy.');

//long string -> long st...
export const setMaxLengthOfValue = (value: string, max: number) =>
  value.length > max ? `${value.slice(0, max)}...` : value;

//delete numbers from string
export const clearNumbers = (str: string) => str.replace(/[0-9]/g, '');

export const clearExceptNumbers = (str: string) =>
  Number(str.replace(/[^0-9]/g, ''));
