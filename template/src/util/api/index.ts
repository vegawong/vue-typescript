import http from './http'
import axios from 'axios'

export default {
  getPackage() {
    return http.get('/post/1', {}, 'https://jsonplaceholder.typicode.com')
  },

  http: http,
  axios: axios
}
