
export const state = () => ({
  pageName: null
})

export const getters = {
  pageName: state => state.pageName
}

export const actions = {
  nuxtServerInit ({ dispatch }) {
    dispatch('user/checkUser')
  },
  setPageName ({ commit }, data) {
    commit('SET_PAGE_NAME', data)
  }
}

export const mutations = {
  SET_PAGE_NAME (state, data) {
    state.pageName = data
  }
}
