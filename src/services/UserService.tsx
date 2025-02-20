import { setAccessToken } from '../helper/token';
import { Login } from '../interfaces/User';

export const login = async ({ email, password }: Login) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/user/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include'
      }
    );

    setAccessToken(response.headers.get('Authorization') || '');

    if (!response.ok) {
      throw new Error('로그인에 실패했습니다.');
    }
  
    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error('로그인에 실패했습니다.');
  }
};

