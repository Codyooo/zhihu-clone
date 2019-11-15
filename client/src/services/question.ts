import ajax from 'axios';

export const queryAllQuestions = (limit = 10, page = 1) => {
  return ajax.get(`/api/v1/questions/?limit=${limit}&page=${page}`);
};
