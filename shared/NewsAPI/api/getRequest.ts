import axios from 'axios';
import { Endpoints } from '@/shared/NewsAPI/api/enums';
import { validateParams } from '@/shared/NewsAPI/lib/validateParams';
import { AllParams, HeadlineParams } from '@/shared/NewsAPI/api/types';

const API_KEY = process.env.NEWS_API_KEY;
axios.defaults.baseURL = 'https://newsapi.org/v2';

/**
 * Generates axios get request to News API
 * @param endpoint - headlines / all
 * @param params - get parameters for querying
 */
export const getRequest = <T extends HeadlineParams | AllParams>(
  endpoint = Endpoints.Headlines,
  params: T
) => {
  return async () =>
    axios.get(endpoint, {
      params: {
        ...validateParams(params),
        apiKey: API_KEY,
      },
    });
};
