// API
export const API_ROOT = (process.env.NODE_ENV === 'production')
  ? 'http://smile.e-pro.com.cn'
  : 'http://localhost:8080/e-api'

export const GET_HEALTH_DATA = API_ROOT + '/cgi/mp/get_latest_tr'
export const GET_USER_DATA = API_ROOT + '/cgi/mp/get_user_info'
export const API_GET_CAPTCHA = API_ROOT + '/cgi/vcode'
export const API_REGISTER_BY_PHONE = API_ROOT + '/cgi/mp/register'
export const API_GET_DAILY_LIST = API_ROOT + '/cgi/mp/get_tr_list'
