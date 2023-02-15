import axios from 'axios';

import { validateParams } from '../lib/validateParams';
import {
  IAllParams,
  IHeadlineParams,
  IResponse,
  Endpoints,
} from './getRequest.types';

const API_KEY = process.env.NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

axios.defaults.baseURL = BASE_URL;

/**
 * Generates axios get request to News API
 * @param endpoint - headlines / all
 * @param params - get parameters for querying
 */
export const getRequest =
  <T extends Endpoints>(
    endpoint: T extends Endpoints.All ? Endpoints.All : Endpoints.Headlines,
    params?: T extends Endpoints.All ? IAllParams : IHeadlineParams
  ) =>
  async (page: number, pageSize: number) => {
    const result = await axios.get<IResponse>(endpoint, {
      params: {
        ...validateParams(params || { q: '' }),
        page: page,
        pageSize: Math.min(Math.max(1, pageSize), 100),
        apiKey: API_KEY,
      },
    });
    return result.data;
  };
