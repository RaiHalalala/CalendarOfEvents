import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { clearExceptNumbers } from 'utils/helper';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentEvent, myEventsList } from 'store';
import { Customer, CustomerInfo } from 'type/customer';
import PopupSubscribe from 'components/Modals/PopupSubscribe';
import PopupAttention from 'components/Modals/PopupAttention';
import CustomersContent from 'components/CustomersContent';
import PopupWrapper from 'components/Modals/PopupWrapper';
import EventContent from 'components/EventContent';

const Event = () => {
  const location = useLocation();
  const ID = clearExceptNumbers(location.pathname);
  const event = useRecoilValue(currentEvent(ID));
  const [list, setList] = useRecoilState(myEventsList);
  const [isOpen, setOpen] = useState({
    form: false,
    attention: false,
  });
  const [isSubscribe, setSubscribe] = useState(false);

  useEffect(() => {
    if (event) {
      const find = list.find(({ event: { id } }) => id === event.id);
      if (find && !isSubscribe) {
        setSubscribe(true);
      }
    }
  }, [event]);

  const unsubscribe = () => {
    setOpen((prev) => ({ ...prev, attention: false }));
    setList((prev) => prev.filter(({ id }) => id !== event?.id));
    setSubscribe(false);
  };
  const onSubmitForm = (values: CustomerInfo) => {
    if (!event) {
      return;
    }
    setOpen((prev) => ({ ...prev, form: false }));
    const customer: Customer = {
      id: event.id,
      firstName: values.firstName,
      lastName: values.lastName,
      event: event,
    };
    setList((prev: Customer[]) => [...prev, customer]);
    setSubscribe(true);
  };
  if (!event) {
    return null;
  }
  return (
    <>
      <EventContent
        subscribeOnEvent={() => setOpen((prev) => ({ ...prev, form: true }))}
        unsubscribeOnEvent={() =>
          setOpen((prev) => ({ ...prev, attention: true }))
        }
        isSubscribe={isSubscribe}
        {...event}
      />
      <CustomersContent eventId={event.id} />
      <PopupWrapper isOpen={isOpen.form}>
        <PopupSubscribe
          onClose={() => setOpen((prev) => ({ ...prev, form: false }))}
          onSubmitForm={onSubmitForm}
          paramsItem={event}
        />
      </PopupWrapper>
      <PopupWrapper isOpen={isOpen.attention}>
        <PopupAttention
          onClose={() => setOpen((prev) => ({ ...prev, attention: false }))}
          onAllow={unsubscribe}
        />
      </PopupWrapper>
    </>
  );
};

export default Event;
