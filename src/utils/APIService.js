import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  url: BASE_URL,
  params: {
    maxResults: "1",
  },
  headers: {
    "X-RapidAPI-Key": "a35a38f917msh9e9a726880c586fp10d5b4jsn5c856232651f",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const APIService = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

// export const APIService = async (url) => {
//   const cancelTokenSource = axios.CancelToken.source();
//   const { data } = await axios.get(
//     `${BASE_URL}/${url}`,
//     {
//       cancelToken: cancelTokenSource.token,
//     },
//     options
//   );
//   cancelTokenSource.cancel();
//   return data;
// };
