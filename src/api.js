import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://api.github.com/users/',
});

export const fetchGithubUserInfo = async (username) => {
  try {
    const response = await client.get(username);

    return response.data;
  } catch (e) {
    return null;
  }
};
