import axios from 'axios'
import miniToastr from 'mini-toastr'
miniToastr.init()

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL

const instance = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    Accept: `application/json`,
  },
})

instance.interceptors.request.use(
  async (config) => {
    const token = await localStorage.getItem('token')
    if (token != null) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => Promise.reject(error),
)

function httpMsg(obj, statuscode, msg) {
  if (statuscode === 401) {
    obj.$store.dispatch('logout').then(() => {
      obj.$router.push('/login')
    })
  } else if (statuscode === 200) {
    miniToastr.success(msg)
  } else if (statuscode === undefined) {
    miniToastr.error('Please contact administrator!!!')
  } else {
    miniToastr.error(msg)
  }
}

export default {
  instance,
  apiBaseUrl,
  httpMsg,
}
