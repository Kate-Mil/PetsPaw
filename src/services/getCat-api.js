import axios from 'axios';

axios.defaults.baseURL = `https://api.thecatapi.com/v1`;
axios.defaults.headers.common[
  'x-api-key'
] = `live_R8g8WvxoJw5GPT3tbmLTVc6OlyxWuO6jTJ6RODP62xwHTOiCeESN3NAx8eTrXZWl`;

export const getAllCats = async () => {
  const { data } = await axios.get(`/images/search?limit=10`);
  return data;
};

export const getAllBreeds = async () => {
  const { data } = await axios.get(`/breeds`);
  return data;
};

export const getCatsImagesByBreed = async breed_id => {
  const { data } = await axios(`/images/search?breed_ids=${breed_id}`);
  return data;
};

// export const getCatsImagesByBreed = async (breed_id, amount, order) => {
//   const { data } = await axios(
//     `/images/search?breed_ids=${breed_id}&limit=${amount}&order=${order}`
//   );

//   console.table(data);
//   return data;
// };
