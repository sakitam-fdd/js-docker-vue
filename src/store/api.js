import axios from 'axios'
const baseUrl = process.env.BASE_URL
const defaults = {
  baseURL: baseUrl,
  headers: {
    post: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
}

Object.assign(axios.defaults, defaults)

export const getDemoText = name => {
  return axios.get(`/static/demo/${name}` + `.html`, {
    baseURL: ''
  })
}

export const getNavlist = () => {
  return axios.get('/static/json/navList.json', {
    baseURL: ''
  })
}
