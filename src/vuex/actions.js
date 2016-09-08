import * as types from './mutation-types'
import * as api from '../constants/api'

//  获取标题, 更新标题
export const getHeadline = ({ dispatch }) => {
  dispatch(types.GET_HEADLINE)
}
export const updateHeadline = ({ dispatch }, value) => {
  dispatch(types.UPDATE_HEADLINE, value)
}

// 获取口腔数据
export const getHealthData = ({dispatch}, value) => {
  this.$http.get(api.API_ROOT + api.GET_HEALTH_DATA).then(response => {
    dispatch(types.GET_HEALTH_DATA, JSON.parse(response.body), error => {
      dispatch(types.GET_HEALTH_DATA_FAILURE, error)
    })
  })
}

// 获取用户数据
export const getUserData = ({dispatch}, value) => {
  this.$http.get(api.API_ROOT + api.GET_USER_DATA).then(response => {
    dispatch(types.GET_USER_DATA, JSON.parse(response.body), error => {
      dispatch(types.GET_USER_DATA_FAILURE, error)
    })
  })
}

export const updateActiveTab = ({dispatch}, value) => {
  dispatch(types.UPDATE_ACTIVE_TAB, value)
}
