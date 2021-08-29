import axios from 'axios'

const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}

const githubAxios = axios.create({
  baseURL: 'https://github.com',
  headers: defaultHeaders
})

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: defaultHeaders
})

export { githubApi, githubAxios }
