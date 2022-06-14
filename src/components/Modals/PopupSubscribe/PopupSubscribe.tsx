import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box } from '@mui/material';
import { CssTextField } from 'ui-custom/CssTextField';
import { DefaultValues, defaultValues, inputs } from './helper';
import { EventType } from 'type/event';
import { schema } from 'utils/schema';
import Item from 'components/Item';
import Buttons from '../Buttons';
import Header from './Header';
import styled from './popupSubscribe.module.scss';
import { CustomerInfo } from 'type/customer';

interface PopupSubscribeProps {
  paramsItem: EventType;
  onClose: () => void;
  onSubmitForm: (data: CustomerInfo) => void;
}

const PopupSubscribe: FC<PopupSubscribeProps> = ({
  paramsItem,
  onClose,
  onSubmitForm,
}: PopupSubscribeProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<DefaultValues> = (data) => onSubmitForm(data);
  return (
    <form className={styled.container} onSubmit={handleSubmit(onSubmit)}>
      <Header onClose={onClose} />
      <Box textAlign="end" className={styled.box}>
        <Item withoutEnd {...paramsItem} />
        {inputs.map(({ label, name }, index) => (
          <Box key={index} className={styled.input}>
            <CssTextField
              id="custom-css-outlined-input"
              size="small"
              label={label}
              fullWidth
              {...register(name)}
              error={Boolean(errors[name])}
              helperText={errors[name]?.message}
            />
          </Box>
        ))}
        <Buttons onClose={onClose} />
      </Box>
    </form>
  );
};

export default PopupSubscribe;
