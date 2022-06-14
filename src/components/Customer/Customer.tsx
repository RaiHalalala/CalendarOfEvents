import { FC } from 'react';
import { Customer as CustomerProps } from 'type/customer';
import styled from './customer.module.scss';

const Customer: FC<CustomerProps> = ({
  firstName,
  lastName,
}: CustomerProps) => (
  <div className={styled.wrapper}>
    <p className={styled.name}>{firstName}</p>
    <p className={`${styled.name} ${styled.lastName}`}>{lastName}</p>
  </div>
);

export default Customer;
