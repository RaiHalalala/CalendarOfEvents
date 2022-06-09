import { EventType } from './event';

export interface CustomerInfo {
  firstName: string;
  lastName: string;
}

export interface Customer extends CustomerInfo {
  id: number;
  event: EventType;
}
