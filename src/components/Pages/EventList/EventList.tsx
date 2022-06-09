import React from 'react';
import { convertEventsList } from 'store';
import { useRecoilValue } from 'recoil';
import Card from 'components/Card';
import Filter from 'components/Filter';
import Empty from 'components/Empty';
import styled from './event.module.scss';

const EMPTY_CONTENT =
  'Выберите другую дату. В этом месяце или годy нет событий';

const EventList = () => {
  const data = useRecoilValue(convertEventsList);

  return (
    <section className={styled.wrapper}>
      <Filter />
      {!data.length ? (
        <Empty>{EMPTY_CONTENT}</Empty>
      ) : (
        <div className={styled.container}>
          {data.map((params) => (
            <Card key={params.id} {...params} />
          ))}
        </div>
      )}
    </section>
  );
};

export default EventList;
