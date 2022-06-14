import { Button, Box } from '@mui/material';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { convertMyEventsList, limitState, LIMIT } from 'store';
import { BUTTON_TITLE } from 'constants/common';
import Filter from 'components/Filter';
import Empty from 'components/Empty';
import Item from 'components/Item';
import styled from './calendar.module.scss';

const EMPTY_CONTENT =
  'Выберите другую дату. В этом месяце или годy нет событий';

const Calendar = () => {
  const { end, list } = useRecoilValue(convertMyEventsList);
  const setLimit = useSetRecoilState(limitState);
  return (
    <section className={styled.wrapper}>
      <Filter />
      {list.length ? (
        <>
          {list.map((event) => (
            <Item key={event.id} {...event} />
          ))}
          {!end && (
            <Box textAlign="center" className={styled.container}>
              <Button
                onClick={() => setLimit((prev) => prev + LIMIT)}
                variant="custom">
                {BUTTON_TITLE}
              </Button>
            </Box>
          )}
        </>
      ) : (
        <Empty>{EMPTY_CONTENT}</Empty>
      )}
    </section>
  );
};

export default Calendar;
