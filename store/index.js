import { auth, db } from '~/plugins/firebase'
import apiGeounity from '~/plugins/api'

export const state = () => ({
  loading: false,
  error: false,
  authId: null,
  user: {
    username: null,
    email: null,
    emailVerified: null,
    photoURL: '',
    idDoc: '',
    accessToken: '',
    phoneNumber: '',
    providerData: '',
    communities: [1] // Haciendo referencia a Global
  },
  geocommunity: [
    {
      name: 'Global',
      level: 1,
      polls: '',
      statics: '',
      debates: '',
      aims: ''
    }
  ],
  // , otro tipo de comunidades como las empresas, organizaciones, ideologías
  country: null
})

export const getters = {
  geocommunity: state => state.geocommunity,
  statics: state => state.geocommunity[state.geocommunity.length - 1].statics
}

export const mutations = {
  SET_AUTHID: (state, id) => {
    state.authId = id
  },
  SET_COUNTRY: (state, payload) => {
    state.country = {
      ...state.country,
      ...payload
    }
  },
  SET_MODAL_STATE: (state, { name, value }) => {
    state.modals[name] = value
  },
  SET_USER: (state, payload) => {
    state.user = payload
  },

  UPDATE_USER: (state, payload) => {
    state.user = {
      ...state.user,
      ...payload
    }
  },
  UPDATE_GEOCOMMUNITY: (state, payload = {}) => {
    console.log('PRUEBA')
    console.log(payload.name)
    let l = state.geocommunity.length
    let i = payload.level
    for (i; i <= l; i++) {
      state.geocommunity.pop()
    }
    state.geocommunity.push(payload)
  }
}

export const actions = {
  CREATE_POLL: ({ state, commit }, poll) => {
    const newPoll = poll
    const pollId = `poll${Math.random()}`
    newPoll['key'] = pollId
    newPoll.userId = state.authId
    commit('SET_POLL', { newPoll, pollId })
    commit('APPEND_POLL_TO_USER', { pollId, userId: newPoll.userId })
  },
  CREATE_USER: ({ state, commit }, { email, username, password }) => new Promise((resolve) => {
    auth.createUserWithEmailAndPassword(email, password).then((account) => {
      console.log(account)
      const newUser = { email, username }
      db.collection('users').add(newUser)
        .then((doc) => {
          console.log('Document written with ID: ', doc.id)
          commit('UPDATE_USER', { ...newUser, idDoc: doc.id })
          resolve(state.user)
        })
        .catch((e) => {
          console.error('Error adding document: ', e)
        })
      // Guardar en Cloud
      console.log('newUser')
      console.log(newUser)
    })
  }),
  FETCH_AUTH_USER: ({ commit }) => {
    const userId = auth.currentUser.uid
    commit('SET_AUTHID', userId)
  },
  FETCH_COUNTRY: ({ commit }, code) => {
    apiGeounity.get(`/country/${code}`)
      .then((country) => {
        let data = country.data
        commit('UPDATE_GEOCOMMUNITY', { name: data.in_continent, level: 2 }) // Agregando el continente que contiene al país
        commit('UPDATE_GEOCOMMUNITY', { ...data, level: 3 })
        commit('SET_COUNTRY', data)
      })
  },
  FETCH_USER: ({ state, commit }, { id }) => new Promise((resolve) => {
    // traer de firestore el usuario con sus encuestas
  }),
  SIGN_IN: (ctx, { email, password }) => {
    return auth.signInWithEmailAndPassword(email, password)
  },
  SIGN_OUT: ({ commit }) => {
    auth.signOut()
      .then(() => {
        commit('SET_AUTHID', null)
      })
  },
  TOGGLE_MODAL_STATE: ({ commit }, { name, value }) => {
    commit('SET_MODAL_STATE', { name, value })
  }
}
