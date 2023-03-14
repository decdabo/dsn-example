export class Services {
  constructor() {
    this.ENDPOINT = process.env.NODE_ENV !== 'production' ? 'http://localhost:9000' : '';
  }

  async Get(endpoint) {
    const data = await (await fetch(`${this.ENDPOINT}${endpoint}`)).json();

    return data.data;
  }
}
