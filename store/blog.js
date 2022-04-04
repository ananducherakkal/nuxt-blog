export const state = () => ({
  blog: null
})

export const getters = {
  blog: state => state.blog
}

export const actions = {
  async getBlogs () {
    return await this.$axios.$get(`${process.env.API_URL}/blog/`)
      .then(response => (response && response.data) || [])
      .catch(() => null)
  },
  async getBlogsByUser (_, formData) {
    return await this.$axios.$get(`${process.env.API_URL}/blog-by-user/${formData.id}/`)
      .then(response => (response && response.data) || [])
      .catch(() => null)
  },
  async getBlog ({ commit }, formData) {
    return await this.$axios.$get(`${process.env.API_URL}/blog/${formData.id}/`)
      .then((response) => {
        commit('SET_BLOG', response && response.data)
        return response && response.data
      })
      .catch(() => {})
  },
  addBlog ({ commit, rootState }, formData) {
    return new Promise((resolve, reject) => {
      // formData.user_id = rootState.user.userDetails && rootState.user.userDetails.id
      // this.$axios.$post(`${process.env.API_URL}/blog/`, formData)
      //   .then((response) => {
      //     commit('SET_BLOG', (response && response.data) || null)
      //     return resolve((response && response.data) || null)
      //   })
      //   .catch((error) => {
      //     return reject(error)
      //   })
      resolve('success')
    })
  },
  updateBlog ({ commit }, formData) {
    return new Promise((resolve, reject) => {
      // this.$axios.$patch(`${process.env.API_URL}/blog/${formData.id}/`, formData)
      //   .then((response) => {
      //     commit('SET_BLOG', (response && response.data) || null)
      //     return resolve((response && response.data) || null)
      //   })
      //   .catch((error) => {
      //     return reject(error)
      //   })
      resolve('success')
    })
  }
}

export const mutations = {
  SET_BLOG (state, data) {
    state.blog = data
  }
}
