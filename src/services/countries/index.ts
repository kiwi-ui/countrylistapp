import axios from 'axios';

export const countryQuery = () => {
    return axios.post('https://countries.trevorblades.com/',{ 
    query: 
        `query {
            countries {
            code
            name
            emojiU
            capital
            currency
            }
        }`
    });
  };
  