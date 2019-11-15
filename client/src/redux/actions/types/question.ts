export enum QuestionType {
  FETCH_QUESTIONS_LIST_REQUEST = '@questionList/LOAD_REQUEST',
  FETCH_QUESTIONS_LIST_SUCCESS = '@questionList/LOAD_SUCCESS',
  FETCH_QUESTIONS_LIST_FAILURE = '@questionList/LOAD_FAILURE',
  FETCH_QA_LIST_REQUEST = '@QAList/LOAD_REQUEST',
  FETCH_QA_LIST_SUCCESS = '@QAList/LOAD_SUCCESS',
  FETCH_QA_LIST_FAILURE = '@QAList/LOAD_FAILURE',
  FETCH_QA_LIST_MORE_REQUEST = '@QAList/LOAD_REQUEST',
  FETCH_QA_LIST_MORE_SUCCESS = '@QAList/LOAD_SUCCESS'
}

/**
 * Data type
 */
export interface QA {
  _id: string;
  title: string;
  description: string;
  comments?: number;
  answer?: Answer;
}

export interface Answer {
  _id: string;
  content: string;
  voteCount: number;
  questionId: string;
  answerer: User;
}

export interface User {
  _id: string;
  avatar_url: string;
  gender: string;
  name: string;
  selfIntro: string;
}

/**
 * State Type
 */
export interface QuestionState {
  readonly data: QA[];
  readonly loadding: boolean;
  readonly error: any;
}
