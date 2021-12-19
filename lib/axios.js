import Axios from 'axios'

const API_URL = 'http://134.209.225.13:1337'

const axios = Axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})
const TOKEN_NAME = 'esports_access_token'
const USER_STORE_NAME = 'esports__user'

// Request interseptor to check server response time
axios.interceptors.request.use(
  function (config) {
    config.metadata = { startTime: new Date() }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)
axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    response.config.metadata.endTime = new Date()
    response.duration =
      response.config.metadata.endTime - response.config.metadata.startTime
    console.log(`${response.config.url} ==> ${response.duration}ms`)
    if ([200, 201].includes(response.status)) {
      return response.data
    } else {
      return Promise.reject(response)
    }
  },
  function (error) {
    if (
      !error.response ||
      (error.response && [401].includes(error.response.status))
    ) {
      // if (window) localStorage.removeItem(USER_STORE_NAME)
    }
    console.log('Interceptor Error: ' + error)
    return Promise.reject(error)
  }
)

function setToken(token) {
  document.cookie =
    TOKEN_NAME +
    '=' +
    (token || '') +
    `; expires=${new Date(
      new Date().getTime() + 24 * 1000 * 60 * 60
    ).toUTCString()}`
}
function getToken() {
  var nameEQ = TOKEN_NAME + '='
  var ca = document.cookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) === ' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
  }
  return null
}

function eraseToken() {
  document.cookie = `${TOKEN_NAME}=; Max-Age=0`
}

let securedFetchOptions = () => {
  return {
    headers: {
      Authorization: 'Bearer ' + getToken(),
    },
  }
}
export {
  axios,
  getToken,
  setToken,
  eraseToken,
  securedFetchOptions,
  TOKEN_NAME,
  USER_STORE_NAME,
}
