import { Account } from '../interfaces/Account';

// export const registerAccount = async () => {
//   try {
//     const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/stock`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ email, password }),
//       credentials: 'include'
//     });
//     return await response.json();
//   } catch (error) {
//     console.error(error);
//     throw new Error('주식 정보를 받아올 수 없습니다.');
//   }
// };

export const depositMoney = async ({ balance }: Account) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/account/deposit`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ balance }),
        credentials: 'include'
      }
    );
    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error('입금에 실패하였습니다.');
  }
};

export const withdrawMoney = async ({ balance }: Account) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/account/withdraw`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ balance }),
        credentials: 'include'
      }
    );
    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error('출금에 실패하였습니다.');
  }
};

export const fetchAccount = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/account`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      },
      credentials: 'include'
    });

    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error('계좌 정보를 받아올 수 없습니다..');
  }
};
