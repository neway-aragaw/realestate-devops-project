import axios from '../lib/axios';

export const getAllProperties = async () => {
  const res = await axios.get('/properties');
  return res.data;
};
