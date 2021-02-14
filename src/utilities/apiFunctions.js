import axios from 'axios';

export const retrievePeople = async () => {
  try {
    const response = await axios.get('http://localhost:9292/api/v1/people');
    if (response.status === 200 && response.data !== null) {
      return response.data.map((datum) => {
        return datum.name;
      });
    } else {
      return [];
    }
  } catch (error) {
    console.log(error);
    return [];
  }
}

export const retrievePizza = async () => {
  try {
    const response = await axios.get('http://localhost:9292/api/v1/pizza');
    if (response.status === 200 && response.data !== null) {
      return response.data.map((datum) => {
        return datum.meat_type;
      });
    } else {
      return [];
    }
  } catch (error) {
    console.log(error);
    return [];
  }
}
