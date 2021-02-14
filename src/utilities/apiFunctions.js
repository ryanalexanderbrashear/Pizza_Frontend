import axios from 'axios';

export const retrievePeople = async () => {
  try {
    const response = await axios.get('http://localhost:9292/api/v1/people');
    if (response.status === 200 && response.data !== null) {
      return response.data;
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
      return response.data;
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

export const updatePizza = async (id, meatType) => {
  try {
    const response = await axios.put(`http://localhost:9292/api/v1/pizza?id=${id}&meat_type=${meatType}`);
    if (response.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
}

export const deletePizza = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:9292/api/v1/pizza?id=${id}`);
    if (response.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
}
