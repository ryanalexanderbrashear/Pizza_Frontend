import axios from 'axios';

export const retrievePeople = () => {
  axios.get('http://localhost:9292/api/v1/people')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
}