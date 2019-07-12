export const state = () => ({
  loading: false,
  error: false,
  authId: null,
  user: {
    logged: false,
    username: null,
    email: null,
    verified: null,
    photoURL: ''
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
  setUser (state, payload = {}) {
    state.user = payload
  },
  updateCommunity (state, payload = {}) {
    state.geocommunity[payload.level] = { name: payload.name }
  },
  signIn (state, payload) {
    state.user.logged = true
    state.user.username = payload.displayName
    state.user.email = payload.email
    state.user.photoURL = payload.photoURL
  },
  signOut (state) {
    state.user.logged = false
  }
}
