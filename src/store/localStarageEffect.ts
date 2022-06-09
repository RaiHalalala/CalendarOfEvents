import { AtomEffect } from 'recoil';
import { Customer } from 'type/customer';

export const localStorageEffect =
  (key: string): AtomEffect<Customer[]> =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue, _, isReset) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };
