import axios from 'axios';

const API_ROUTE = 'https://jsonplaceholder.typicode.com/users'

const userService = {
  getAll: async () => {
    const {data} = await axios.get(`${API_ROUTE}`);
    console.log(data);
    return data;
  },

  create: async (requestData) => {
    const data = await axios.post(
      `${API_ROUTE}`,
      requestData,
    );

    return data;
  },

  update: async (requestData, id) => {
    const { data } = await axios.put(
      `${API_ROUTE}/${id}`,
      requestData,
    );

    return data;
  },

  delete: async (id) => {
    const { data } = await axios.delete(
      `${API_ROUTE}/${id}`,
    );

    return data;
  },
};

export default userService;