import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { customersCurrentEvent } from 'store';
import Customer from 'components/Customer/Customer';
import styled from './customerContent.module.scss';

const TITLE = 'Посетители';
const EMPTY_CONTENT = 'пока никто не записан';

interface CustomersContentProps {
  eventId: number;
}

const CustomersContent: FC<CustomersContentProps> = ({
  eventId,
}: CustomersContentProps) => {
  const customers = useRecoilValue(customersCurrentEvent(eventId));
  return (
    <div className={styled.wrapper}>
      <p className={styled.title}>
        <b className={styled.titleBold}>{TITLE}</b> {customers.length}
      </p>
      {customers.length
        ? customers.map((params, index) => <Customer key={index} {...params} />)
        : EMPTY_CONTENT}
    </div>
  );
};

export default CustomersContent;
