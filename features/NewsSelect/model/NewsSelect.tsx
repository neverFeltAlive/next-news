import { useQueryParams } from '@/entities/QueryParams';
import { NewsAPICountries, NewsAPISortOptions } from '@/shared/NewsAPI';
import { setOptionValueType, UIOption, UISelect } from '@/shared/UIKit';

interface IProps<T extends 'country' | 'sortBy'> {
  options: OptionsType<T>;
}

type OptionsType<T extends 'country' | 'sortBy'> = T extends 'country'
  ? { [key in keyof typeof NewsAPICountries]: string }
  : { [key in keyof typeof NewsAPISortOptions]: string };

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

  return (
    <UISelect
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
