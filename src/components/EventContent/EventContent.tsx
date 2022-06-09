import { FC } from 'react';
import { EventType } from 'type/event';
import Image from 'components/Image';
import SubscribeButton from './SubscribeButton';
import DateBlock from './DateBlock';
import styled from './eventContent.module.scss';

interface EventContentProps extends EventType {
  isSubscribe: boolean;
  subscribeOnEvent: () => void;
  unsubscribeOnEvent: () => void;
}

const EventContent: FC<EventContentProps> = ({
  id,
  image,
  date,
  title,
  description,
  isSubscribe,
  subscribeOnEvent,
  unsubscribeOnEvent,
}: EventContentProps) => (
  <div className={styled.wrapper}>
    <Image
      src={image}
      width="100%"
      height="100%"
      className={styled.image}
      alt={`card-${id}`}
    />
    <div className={styled.content}>
      <div className={styled.header}>
        <p className={styled.title}>{title}</p>
        <DateBlock date={date} />
      </div>
      <p className={styled.description}>{description}</p>
      <SubscribeButton
        isSubscribe={isSubscribe || false}
        onClick={() =>
          isSubscribe ? unsubscribeOnEvent() : subscribeOnEvent()
        }
      />
    </div>
  </div>
);

export default EventContent;
