import { NewsAPICountries, NewsAPISortOptions } from '@/shared/NewsAPI';
import { setOptionValueType, UIOption, UISelect } from '@/shared/UIKit';

import { useQueryParams } from '@/entities/QueryParams';

import {
  IProps,
  OptionsType,
} from '@/features/NewsSelect/model/NewsSelect.types';

export const NewsSelect = <T extends 'country' | 'sortBy'>({
  options,
}: IProps<T>) => {
  const [params, setParams] = useQueryParams();

  const paramName = Object.values(options).includes(NewsAPICountries.Australia)
    ? 'country'
    : Object.values(options).includes(NewsAPISortOptions.Popularity)
    ? 'sortBy'
    : '';

  const setParamValue = (value: string) => {
    !!paramName && setParams({ [paramName]: value });
  };

  const getValue = () =>
    !!paramName ? params[paramName as keyof typeof params] : '';

  const getDefaultValue = () =>
    getValue() || paramName === 'country' ? 'Country' : 'Sort';

  if (paramName === 'country') console.log(params);

  return (
    <UISelect
      defaultValue={getDefaultValue()}
      selected={
        Object.keys(options).find(
          (key) => options[key as keyof OptionsType<T>] === getValue()
        ) || ''
      }
      setValue={setParamValue}
    >
      {(Object.keys(options) as Array<keyof typeof options>).map(
        (key) =>
          function NewsOption(setValue: setOptionValueType<string>, onClick) {
            return (
              <UIOption
                key={key.toString()}
                value={options[key] as string}
                isSelected={(options[key] as string) === getValue()}
                setValue={setValue}
                onClick={onClick}
              >
                {key.toString()}
              </UIOption>
            );
          }
      )}
    </UISelect>
  );
};

export default NewsSelect;
