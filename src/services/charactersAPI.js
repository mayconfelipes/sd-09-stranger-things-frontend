import axios from 'axios';

const { DEFAULT_TIMEOUT }= process.env;
class CharactersService {
  constructor({ url = process.env.DEFAULT_URL, timeout = DEFAULT_TIMEOUT }) {
    this.http = axios.create({
      baseURL: url,
      timeout,
    });
  }

  async getCharacters(name, page, size) {
    const params = {
      page,
      size,
      name,
    };

    return this.http.get('/', { params });
  }
}

export default CharactersService;
