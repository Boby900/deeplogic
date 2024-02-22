import axios from 'axios';

export function getPosts() {
  return axios.get('http://127.0.0.1:8000/socialmedia/')
    .then(response => response.data)
}