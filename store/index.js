import firebase from '~/plugins/firebase'

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

export const getters = () => ({
  authUser: state => state.users[state.authId]
})
export const actions = () => ({
  FETCH_USER: ({ state, commit }, { id }) => new Promise((resolve) => {
    firebase.database().ref('users').child(id).once('value', (snapshot) => {
      commit('SET_ITEM', { resource: 'users', id: snapshot.key, item: snapshot.val() });
      resolve(state.users[id]);
    })
  }),
  FETCH_AUTH_USER: ({ dispatch, commit }) => {
    const userId = firebase.auth().currentUser.uid;
    return dispatch('FETCH_USER', { id: userId })
      .then(() => {
        commit('SET_AUTHID', userId);
      })
  }
})

export const mutations = {
  SET_ITEM(state, { item, id, resource }) {
    const newItem = item;
    newItem['.key'] = id;
    // Vue.set(state[resource], id, newItem);
  },
  SET_AUTHID(state, id) {
    state.authId = id;
  },
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
