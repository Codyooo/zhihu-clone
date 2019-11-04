import ajax from './index';

export const queryComments = (
  questionId: string,
  answerId: string,
  countOnly?: boolean
) => {
  return ajax({
    method: 'GET',
    url: `/api/v1/question/${questionId}/answer/${answerId}/comment${
      countOnly ? '/count' : ''
    }`
  });
};
