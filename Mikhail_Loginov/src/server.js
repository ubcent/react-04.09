const SERVER_ADDRESS = 'http://localhost:3000';

export default class App {
  constructor() {
    this.SERVER_ADDRESS = SERVER_ADDRESS;
  }
  get(query) {
    return fetch(`${this.SERVER_ADDRESS}/${query}`)
  }
  post(query, body) {
    return fetch(`${this.SERVER_ADDRESS}/${query}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(body),
    })
  }
  put(query, body) {
    return fetch(`${this.SERVER_ADDRESS}/${query}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'PUT',
      body: JSON.stringify(body),
    })
  }
  delete(query, body) {
    return fetch(`${this.SERVER_ADDRESS}/${query}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'DELETE',
      body: JSON.stringify(body),
    })
  }
}
