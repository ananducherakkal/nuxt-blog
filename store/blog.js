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
  async getBlog ({ commit }, formData) {
    return await this.$axios.$get(`${process.env.API_URL}/blog/${formData.id}/`)
      .then((response) => {
        commit('SET_BLOG', response && response.data)
        return response && response.data
      })
      .catch(error => error)
  },
  async addBlog ({ commit }, formData) {
    return await new Promise((resolve, reject) => {
      this.$axios.$post(`${process.env.API_URL}/blog/`, formData)
        .then((response) => {
          commit('SET_BLOG', response && response.data)
          return resolve(response && response.data)
        })
        .catch((error) => {
          return reject(error)
        })
    })
  },
  async updateBlog ({ commit }, formData) {
    return await this.$axios.$patch(`${process.env.API_URL}/blog/${formData.id}/`, formData)
      .then((response) => {
        commit('SET_BLOG', response && response.data)
        return response && response.data
      })
      .catch(error => error)
  }
}

export const mutations = {
  SET_BLOG (state, data) {
    state.blog = data
  }
}
