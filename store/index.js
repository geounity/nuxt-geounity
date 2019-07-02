export const state = () => ({
  loading: false,
  error: false,
  logged: false,
  community: {
    name: 'global',
    type: 'geographic',
    level: 1
  },
  statics: [],
  debates: [],
  aims: [],
  continents: ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'],
  countries: []
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
