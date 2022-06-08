import { getEventsData } from 'store/eventsAtom';
import { useRecoilValue } from 'recoil';

export const useAppInit = () => {
  const data = useRecoilValue(getEventsData);
  return { data };
};
