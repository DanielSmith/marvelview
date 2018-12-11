import axios from 'axios';

const PUBLIC_KEY = '39a66d27f10436a1b43571537fccad0d';

export default axios.create ({
  baseURL: 'http://gateway.marvel.com/v1/public',
  params: {
     apikey: PUBLIC_KEY
  }
});
