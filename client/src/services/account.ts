import ajax from 'axios';

interface LoginParams {
  name: string;
  password: string;
}

export const queryAllUser = () => {
  const res = ajax.get('/api/v1/users');
  return res;
};

export const queryAllQuestions = () => {
  return ajax.get('/api/v1/questions/');
};

export const login = (data: LoginParams) => {
  return ajax.post('/api/v1/users/login', data);
};

export const signUp = (data: LoginParams) => {
  return ajax({
    method: 'POST',
    url: '/users/signIn',
    data
  });
};
