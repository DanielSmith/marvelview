import axios from 'axios';

// get a key @ https://developer.marvel.com
const PUBLIC_KEY = 'USE_YOUR_OWN_MARVEL_KEY';

export default axios.create ({
  baseURL: 'http://gateway.marvel.com/v1/public',
  params: {
     apikey: PUBLIC_KEY
  }
});
