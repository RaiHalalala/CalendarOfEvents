import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { myEventsList } from 'store';
import { DeleteOutline } from '@mui/icons-material';
import { setMaxLengthOfValue } from 'utils/helper';
import { useScreen } from 'hooks/useScreen';
import { EventType } from 'type/event';
import PopupAttention from 'components/Modals/PopupAttention';
import PopupWrapper from 'components/Modals/PopupWrapper';
import Image from 'components/Image';
import WrapperLink from './WrapperLink';
import styled from './item.module.scss';

interface ItemProps extends EventType {
  withoutEnd?: boolean;
}

const DELETED = 'удалить';
const LINKED = 'перейти на страницу';

const Item: FC<ItemProps> = ({
  id,
  title,
  description,
  withoutEnd,
}: ItemProps) => {
  const { isMobile } = useScreen();
  const [isOpenAttention, setOpenAttention] = useState(false);
  const setList = useSetRecoilState(myEventsList);
  const DeletedContent = isMobile ? (
    <DeleteOutline style={{ color: 'black', fontSize: '15px' }} />
  ) : (
    DELETED
  );
  const unsubscribe = () => {
    setOpenAttention(false);
    setList((prev) => prev.filter((el) => el.id !== id));
  };
  return (
    <>
      <span className={styled.wrapper}>
        <WrapperLink to={`/${id}`} notLink={withoutEnd}>
          <Image
            src="/static/avatar.png"
            width="38px"
            height="38px"
            className={styled.image}
            alt={`Item-${id}`}
          />
          <div className={styled.center}>
            <p className={styled.title}>{title}</p>
            <p className={styled.description}>
              {setMaxLengthOfValue(description, 20)}
            </p>
          </div>
        </WrapperLink>

        {!withoutEnd && (
          <div className={styled.right}>
            <button
              onClick={() => setOpenAttention(true)}
              className={styled.button}>
              {DeletedContent}
            </button>
            {!isMobile && (
              <>
                | <Link to={`/${id}`}>{LINKED}</Link>
              </>
            )}
          </div>
        )}
      </span>
      <PopupWrapper isOpen={isOpenAttention}>
        <PopupAttention
          onClose={() => setOpenAttention(false)}
          onAllow={unsubscribe}
        />
      </PopupWrapper>
    </>
  );
};

export default Item;
