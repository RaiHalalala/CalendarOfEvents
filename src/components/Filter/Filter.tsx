import { FC } from 'react';
import { useRecoilState } from 'recoil';
import ru from 'date-fns/locale/ru';
import { filterState } from 'store';
import { Box } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { CalendarPickerView } from '@mui/x-date-pickers';
import { setMaxLengthOfValue } from 'utils/helper';
import { CssDateInput } from 'ui-custom/CssDateInput';
import styled from './filter.module.scss';

type TDatePicker = {
  views: CalendarPickerView[];
  classNameBox: string;
  title: string | number;
};

const Filter: FC = () => {
  const [filter, setFilter] = useRecoilState(filterState);
  const titleYear = filter.getFullYear();
  const titleMonth = filter.toLocaleString('ru', {
    month: 'short',
  });
  const shortTitleMonth = setMaxLengthOfValue(titleMonth, 3, '');

  const onFilterByDate = (value: Date | null) => {
    value && setFilter(value);
  };

  const datePickers: TDatePicker[] = [
    { views: ['year'], classNameBox: styled.boxYear, title: titleYear },
    { views: ['month'], classNameBox: styled.boxMonth, title: shortTitleMonth },
  ];

  return (
    <div className={styled.wrapper}>
      <LocalizationProvider adapterLocale={ru} dateAdapter={AdapterDateFns}>
        {datePickers.map(({ views, classNameBox, title }, index) => (
          <DatePicker
            key={index}
            views={views}
            label=""
            minDate={new Date('2012-03-01')}
            maxDate={new Date('2023-06-01')}
            disableMaskedInput
            value={filter}
            onChange={onFilterByDate}
            renderInput={(params) => (
              <Box className={`${styled.box} ${classNameBox}`}>
                <CssDateInput {...params} size="small" />
                <p className={styled.boxTitle}>{title}</p>
              </Box>
            )}
          />
        ))}
      </LocalizationProvider>
    </div>
  );
};

export default Filter;
