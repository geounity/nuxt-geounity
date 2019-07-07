
export const state = () => ({
  loading: false,
  error: false,
  authId: '3u8932748973298',
  user: {
    username: null,
    email: null,
    logged: false
  },
  community: {
    id: 1,
    name: '',
    type: 'geographic',
    level: 1
  },
  statics: [],
  debates: [],
  aims: []
})

export const getters = () => ({})
export const actions = () => ({})

export const mutations = {
  updateCommunity (state, payload = {}) {
    state.community.name = payload.name || 'global'
  },
  signIn (state) {
    state.user.logged = true
  },
  signOut (state) {
    state.user.logged = false
  }
}
