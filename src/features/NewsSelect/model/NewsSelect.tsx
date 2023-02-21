import { useTranslation } from 'next-i18next';

import { NewsAPICountries, NewsAPISortOptions } from '@/shared/NewsAPI';
import { setOptionValueType, UIOption, UISelect } from '@/shared/UIKit';

import { useQueryParams } from '@/entities/QueryParams';

import { IProps, OptionsType } from './NewsSelect.types';

export const NewsSelect = <T extends 'country' | 'sortBy'>({
  options,
}: IProps<T>) => {
  const [params, setParams] = useQueryParams();
  const { t: translation } = useTranslation('common');

  const paramName = Object.values(options).includes(NewsAPICountries.Australia)
    ? 'country'
    : Object.values(options).includes(NewsAPISortOptions.Popularity)
    ? 'sortBy'
    : '';

  const getTranslation = (str: string) =>
    paramName === 'country'
      ? translation(`countries.${str}`)
      : translation(`sort.${str}`);

  const setParamValue = (value: string) => {
    !!paramName && setParams({ [paramName]: value });
  };

  const getParam = () =>
    !!paramName ? params[paramName as keyof typeof params] : '';

  const getSelected = () => {
    const selected = options[
      Object.keys(options).find(
        (key) => options[key as keyof OptionsType<T>] === getParam()
      ) as keyof OptionsType<T>
    ] as string;
    return selected ? getTranslation(selected) : undefined;
  };

  return (
    <UISelect
      defaultValue={getTranslation('name')}
      selected={getSelected() || ''}
      setValue={setParamValue}
    >
      {(Object.keys(options) as Array<keyof typeof options>).map(
        (key) =>
          function NewsOption(setValue: setOptionValueType<string>, onClick) {
            return (
              <UIOption
                key={key.toString()}
                value={options[key] as string}
                isSelected={(options[key] as string) === getParam()}
                setValue={setValue}
                onClick={onClick}
              >
                {getTranslation(options[key] as string)}
              </UIOption>
            );
          }
      )}
    </UISelect>
  );
};

export default NewsSelect;
