import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useScreen } from 'hooks/useScreen';
import { setFormatDate } from 'utils/helper';
import { EventType } from 'type/event';
import Image from 'components/Image';
import styled from './card.module.scss';

const MORE = 'Больше';

const Card: FC<EventType> = ({ id, title, image, date }: EventType) => {
  const { isMobile } = useScreen();
  return (
    <div className={styled.wrapper}>
      <div className={styled.header}>
        <p className={styled.title}>{title}</p>
        <Link to={`/${id}`}>{MORE}</Link>
      </div>

      <Image
        src={image}
        width="100%"
        height={isMobile ? '210px' : '250px'}
        className={styled.image}
        alt={`card-${id}`}
      />
      <p className={styled.date}>{setFormatDate(new Date(date))}</p>
    </div>
  );
};

export default Card;
