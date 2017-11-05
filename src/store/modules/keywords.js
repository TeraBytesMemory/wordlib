import * as types from '../type'
import * as status from '../status'
import analyze from '../../api/analyze'

const state = {
  status: status.NOT_RUNNING,
  isShow: false,
  message: '',
  keywords: [],
  bookmarks: [] // TODO: future
}

const getters = {
  status: state => state.status,
  keywords: state => state.keywords,
  message: state => state.message,
  isShow: state => state.isShow,
  statusKey: state => status
}

const actions = {
  analyze ({ commit, state }, products) {
    const currntURL = window.location.href
    commit(types.BEGIN_ANALYZE)
    analyze(currntURL).then(response => {
      commit(types.FETCH_KEYWORDS, { response })
    }).catch(error => {
      commit(types.ANALYZE_FAILURE, { error: error.toString() })
    })
  },
  toggle ({ commit, state }, products) {
    commit(types.TOGGLE)
  }
}

const mutations = {
  [types.BEGIN_ANALYZE] (state) {
    state.status = status.ANALYZE
  },
  [types.FETCH_KEYWORDS] (state, { response }) {
    state.status = status.SUCCESS
    state.keywords = response.keywords
    state.isShow = true
  },
  [types.ANALYZE_FAILURE] (state, { error }) {
    state.status = status.FAILURE
    state.message = error
  },
  [types.TOGGLE] (state) {
    state.isShow = !state.isShow
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
