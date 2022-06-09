import axiosBase from 'axios';
import { EventType } from 'type/event';

export const axios = axiosBase.create({
  baseURL: process.env.REACT_APP_API_KEY,
  timeout: 10000,
});

export const fetchEvents = async (): Promise<EventType[]> =>
  (await axios.get('')).data;
