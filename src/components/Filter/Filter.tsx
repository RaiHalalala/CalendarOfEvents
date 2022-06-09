import { FC } from 'react';
import { useRecoilState } from 'recoil';
import ru from 'date-fns/locale/ru';
import { filterState } from 'store';
import { TextField, Box } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import styled from './filter.module.scss';

interface FilterProps {}

const Filter: FC<FilterProps> = ({}: FilterProps) => {
  const [filter, setFilter] = useRecoilState(filterState);

  const params = {
    minDate: new Date('2012-03-01'),
    maxDate: new Date('2023-06-01'),
    value: filter,
  };

  const onFilterByDate = (value: Date | null) => {
    value && setFilter(value);
  };

  return (
    <div className={styled.wrapper}>
      <LocalizationProvider adapterLocale={ru} dateAdapter={AdapterDateFns}>
        <DatePicker
          views={['month']}
          label="month"
          disableMaskedInput
          {...params}
          onChange={onFilterByDate}
          renderInput={(params) => (
            <Box className={styled.box}>
              <TextField {...params} size="small" />
            </Box>
          )}
        />
        <DatePicker
          views={['year']}
          label="year"
          {...params}
          onChange={onFilterByDate}
          renderInput={(params) => (
            <Box className={styled.box}>
              <TextField {...params} size="small" />
            </Box>
          )}
        />
      </LocalizationProvider>
    </div>
  );
};

export default Filter;
