import { FC } from 'react';

import { Popup } from '@/shared/Popup';

import { IProps } from '@/entities/News/ui/NewsItemPopup.types';
import { Wrapper } from '@/entities/News/ui/NewsItemPopup.styles';
import NewsItem from '@/entities/News/ui/NewsItem';

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
