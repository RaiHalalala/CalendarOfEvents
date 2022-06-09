import { FC } from 'react';
import { setFormatDate } from 'utils/helper';
import styled from './date.module.scss';

interface DateBlockProps {
  date: string;
}

const DateBlock: FC<DateBlockProps> = ({ date }: DateBlockProps) => (
  <span className={styled.wrapper}>{setFormatDate(new Date(date))}</span>
);

export default DateBlock;
