import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `https://login-fake-api-bc.herokuapp.com`
  })
}
