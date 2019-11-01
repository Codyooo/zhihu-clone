import { AcountTypes } from './account';
import { QuestionType } from './question';

const ActionsTypes = {
  ...AcountTypes,
  ...QuestionType
};

export default ActionsTypes;
