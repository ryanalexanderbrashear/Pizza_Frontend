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

export const retrievePizzas = async () => {
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

export const createPizza = async (meatType) => {
  try {
    const response = await axios.post(`http://localhost:9292/api/v1/pizza?meat_type=${meatType}`);
    console.log(response.status);
    if (response.status === 201) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
}
