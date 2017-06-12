import axios from 'axios'
import * as qs from 'qs'
import { AxiosRequestConfig, HttpResquest } from 'types/interface'

enum HTTPERROR {
  LOGICERROR,
  TIMEOUTERROR,
  NETWORKERROR
}


const DEFAULTCONFIG = {
  baseURL: process.env.ENV_CONFIG.baseURL
}



const isSuccess = res => res.code !== undefined && res.code !== null && Number(res.code) === 1
const resFormat = res => res.data || {}

const http: HttpResquest = {}
const methods = ['get', 'post', 'put', 'delete']

methods.forEach(v => {
  http[v] = (url, data, baseUrl?) => {
    const axiosConfig: AxiosRequestConfig = {
      method: v,
      url,
      baseURL: baseUrl || DEFAULTCONFIG.baseURL
    }
    const instance = axios.create(DEFAULTCONFIG)

    // Add a request interceptor
    instance.interceptors.request.use(cfg => {
      const ts = Date.now() / 1000
      const queryData = {
        ts
      }
      // cfg.url += `&${qs.stringify(queryData)}`
      cfg.params = {
        ...cfg.params,
        ...queryData
      }
      // if (cfg.url.indexOf('http://rap') !== 0) cfg.url += typeof window === 'undefined' ? `&token=${ctx.req.session.staffInfo.token}` : `&token=${cookie().getItem('token')}`;
      return cfg
    }, (error) => Promise.reject(error))
    // Add a response interceptor
    instance.interceptors.response.use(response => {
      if (!isSuccess(response.data)) {
        const _err = {
          msg: response.data.msg,
          code: response.data.code,
          type: HTTPERROR[HTTPERROR.LOGICERROR],
          config: response.config
        }
        // cbLogicError && cbLogicError.call(null, _err);
        return Promise.reject(_err)
      }
      return resFormat(response.data)
    }, error => {
      const _err = {
        msg: error.message || '网络故障',
        type: /^timeout of/.test(error.message) ? HTTPERROR[HTTPERROR.TIMEOUTERROR] : HTTPERROR[HTTPERROR.NETWORKERROR],
        config: error.config
      }
      // cbNetworkError && cbNetworkError.call(null, _err);
      return Promise.reject(_err)
    })
    if (v === 'get') {
      axiosConfig.params = data
    } else if (data instanceof FormData) {
      axiosConfig.data = data
    } else {
      axiosConfig.data = qs.stringify(data)
    }
    axiosConfig.startTime = new Date()
    return instance.request(axiosConfig).then(res => res).catch(err => Promise.reject({
      err,
      stack: err.msg || err.stack || ''
    }))
  }
})

export default http
