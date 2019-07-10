export const state = () => ({
  loading: false,
  error: false,
  authId: '3u8932748973298',
  user: {
    username: null,
    email: null,
    logged: false
  },
  geocommunity: [
    {
      name: 'Global'
    }
  ],
  statics: [],
  debates: [],
  aims: []
})

export const getters = () => ({})
export const actions = () => ({})

export const mutations = {
  updateCommunity (state, payload = {}) {
    state.geocommunity[payload.level] = { name: payload.name }
  },
  signIn (state) {
    state.user.logged = true
  },
  signOut (state) {
    state.user.logged = false
  }
}
