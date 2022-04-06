import decode from 'jwt-decode'

export const state = () => ({
  token: null,
  cookieId: 'blg_tkn_jwjlsn',
  userDetails: null
})

export const getters = {
  token: state => state.token,
  userDetails: state => state.userDetails
}

export const actions = {
  checkUser ({ commit, state }) {
    const token = this.$cookies.get(state.cookieId)
    commit('SET_TOKEN', null)
    commit('SET_USER_DETAILS', null)
    if (token) {
      try {
        const tokenDetails = decode(token)
        const currentTime = Math.floor(Date.now() / 1000)
        let validToken = true
        if (tokenDetails.exp < currentTime) {
          validToken = false
        }
        if (validToken) {
          commit('SET_TOKEN', token)
          commit('SET_USER_DETAILS', tokenDetails)
        }
      } catch (error) {}
    }
  },
  async loginUser ({ dispatch, state }, formData) {
    return await new Promise((resolve, reject) => {
      this.$axios.$post(`${process.env.API_URL}/login/`, formData)
        .then((response) => {
          if (response && response.token) {
            this.$cookies.set(state.cookieId, response.token)
            dispatch('checkUser')
            return resolve(response.token)
          } else {
            return reject(new Error('Invalid token'))
          }
        })
        .catch((error) => {
          return reject(error)
        })
    })
  },
  async registerUser ({ dispatch, state }, formData) {
    return await new Promise((resolve, reject) => {
      this.$axios.$post(`${process.env.API_URL}/user/`, formData)
        .then((response) => {
          if (response && response.data && response.data.token) {
            this.$cookies.set(state.cookieId, response.data.token)
            dispatch('checkUser')
            return resolve(response.data.token)
          } else {
            return reject(new Error('Invalid token'))
          }
        })
        .catch((error) => {
          return reject(error)
        })
    })
  }
}

export const mutations = {
  SET_TOKEN (state, data) {
    state.token = data || null
  },
  SET_USER_DETAILS (state, data) {
    state.userDetails = data || null
  }
}
