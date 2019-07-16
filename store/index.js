import { auth } from '~/plugins/firebase'

export const state = () => ({
  loading: false,
  error: false,
  authId: null,
  user: {
    username: null,
    email: null,
    verified: null,
    photoURL: '',
    communities: [1] // Haciendo referencia a Global
  },
  geocommunity: [
    {
      name: 'Global',
      statics: ['ejemplo', 'otroejemplo'],
      debates: [],
      aims: []
    }
  ]
  // , otro tipo de comunidades como las empresas, organizaciones, ideologías
})

export const getters = () => ({
  statics: state => state.geocommunity[state.geocommunity.length - 1].statics
})

export const actions = () => ({
  FETCH_AUTH_USER: ({ commit }) => {
    const userId = auth.currentUser.uid
    return commit('SET_AUTHID', userId)
  }
})

export const mutations = {
  SET_AUTHID (state, id) {
    state.authId = id
  },
  SET_USER (state, payload = {}) {
    state.user = payload
  },
  SIGN_IN (state, payload) {
    state.user.username = payload.displayName
    state.user.email = payload.email
    state.user.photoURL = payload.photoURL
  },
  SIGN_OUT (state) {
    auth.signOut()
      .then(() => {
        state.authId = null
      })
  },
  UPDATE_GEOCOMMUNITY (state, { name, level }) {
    console.log('PRUEBA')
    console.log(name)
    console.log(level)
    state.geocommunity[level - 1] = {}
    state.geocommunity[level - 1].name = name
  }
}
