export const state = () => ({
  loading: false,
  error: false,
  logged: false,
  user: null,
  authId: '3u8932748973298',
  community: {
    id: 1,
    name: 'global',
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
  loginUser (state) {
    state.logged = true
  },
  closeSessionUser (state) {
    state.logged = false
  }
}
