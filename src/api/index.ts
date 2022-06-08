import axiosBase from 'axios';
import { Event } from 'type/event';

export const axios = axiosBase.create({
  baseURL: process.env.REACT_APP_API_KEY,
  timeout: 10000,
});

export const fetchEvents = async (): Promise<Event[]> =>
  (await axios.get('')).data;
