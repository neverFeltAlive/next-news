import { ChangeEvent, FormEvent, useState } from 'react';

import { UISearch } from '@/shared/UIKit';

import { useQueryParams } from '@/entities/QueryParams';

export const NewsSearch = () => {
  const [params, setParams] = useQueryParams();
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setParams({ q: value });
  };

  return (
    <UISearch
      clearValue={() => setValue('')}
      onSubmit={handleSubmit}
      inputProps={{
        placeholder: 'Search...',
        value,
        onChange: handleChange,
      }}
    />
  );
};

export default NewsSearch;
