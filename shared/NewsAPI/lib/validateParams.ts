import { IAllParams, IHeadlineParams } from '@/shared/NewsAPI/api/types';

/**
 * Validates and casts get parameters for News API request
 */
export const validateParams = (params: IHeadlineParams & IAllParams) => {
  const { pageSize, searchIn, fromDate, toDate, ...otherParams } = params;
  const newParams: { [key: string]: string } = {};

  if (!!pageSize)
    newParams.pageSize = String(Math.min(Math.max(1, pageSize), 100));
  if (!!searchIn && !!searchIn.length) newParams.searchin = searchIn.join(',');
  if (!!fromDate) newParams.fromDate = fromDate?.toISOString().split('.')[0];
  if (!!toDate) newParams.toDate = toDate?.toISOString().split('.')[0];

  return { ...newParams, ...otherParams };
};
