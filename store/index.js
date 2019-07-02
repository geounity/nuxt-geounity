export const state = () => ({
  logged: false,
  community: {
    name: 'global',
    type: 'geographic',
    level: 1
  },
  statics: [],
  debates: [],
  aims: []
})

export const mutations = {
  loginUser (state) {
    state.logged = true
  },
  closeSessionUser (state) {
    state.logged = false
  }
}
