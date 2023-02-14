import { FC } from 'react';

import { Popup } from '@/shared/Popup';

import NewsItem from './NewsItem';
import { Wrapper } from './NewsItemPopup.styles';
import { IProps } from './NewsItemPopup.types';

const NewsItemPopup: FC<IProps> = ({ article, closePopup }) => {
  return (
    <>
      <div id="news_item_popup_id"></div>
      {!!article && (
        <Popup wrapperId="news_item_popup_id" closePopup={closePopup}>
          <Wrapper onClick={(event) => event.stopPropagation()}>
            <NewsItem isFull={true} {...article} />
          </Wrapper>
        </Popup>
      )}
    </>
  );
};

export default NewsItemPopup;
