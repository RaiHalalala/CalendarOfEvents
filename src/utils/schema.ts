import * as yup from 'yup';

const RU_LETTERS = /^[А-ЯЁа-яё]+$/;
const ERROR_MESSAGES = {
  REQUIRED: 'Обязательное поле для заполнения',
  INVALID_NAME: 'Поле может содержать только русские буквы',
};

export const schema = yup
  .object({
    firstName: yup
      .string()
      .matches(RU_LETTERS, {
        excludeEmptyString: true,
        message: ERROR_MESSAGES.INVALID_NAME,
      })
      .required(ERROR_MESSAGES.REQUIRED),
    lastName: yup
      .string()
      .matches(RU_LETTERS, {
        excludeEmptyString: true,
        message: ERROR_MESSAGES.INVALID_NAME,
      })
      .required(ERROR_MESSAGES.REQUIRED),
  })
  .required();
