import ajax from './index';

export interface IAnswerer {
  avatar_url: string;
  gender: string;
  name: string;
  _id: string;
}

export interface IAnswer {
  questionId: string;
  _id: string;
  content: string;
  collectCount: string;
  voteCount: string;
  answerer: IAnswerer;
}

export const queryAnswersById = (questionId: string, hightvote?: boolean) => {
  return ajax({
    method: 'GET',
    url: `/api/v1/questions/${questionId}/answers${
      hightvote ? '/highvote' : ''
    }`
  });
};
