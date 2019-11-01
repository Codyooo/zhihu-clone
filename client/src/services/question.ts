import ajax from 'axios';

export const queryAllQuestions = () => {
  return ajax.get('/api/v1/questions/');
};
