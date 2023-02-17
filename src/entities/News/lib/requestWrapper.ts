import { AxiosResponse } from 'axios/index';

import { INewsAPIResponse } from '@/shared/NewsAPI';

/**
 * Adds delay to default request
 * @param request - request to be delayed
 */
const requestWrapper = async (
  request: () => Promise<AxiosResponse<INewsAPIResponse, any>>
) => {
  const response = await request();
  await new Promise((r) => setTimeout(r, 2000));
  return response;
};
