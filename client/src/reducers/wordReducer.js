const initialState = {
  words: ['keyboard', 'mouse', 'chicken'],
  word: 'keyboard',
  answer: '',
  fetch: false,
  game: false,
  count: 0,
  collections: [],
  records: [],
  try: 1,
  email: 'testing@gmail.com',
  user_uid: '',
  modal_visible: false,
  username: ''
}

export default (state = initialState, actions) => {
  switch (actions.type) {
    case 'SET_MODAL_HIDE':
      return {...state, modal_visible: false}
    case 'SET_MODAL_VISIBLE':
      return {...state, modal_visible: true }
    case 'LOG_OUT':
      return {...state, user_uid: null, email: 'testing@gmail.com'}
    case 'USER_LOGIN':
      return {...state, user_uid: actions.payload.data.uid, email: actions.payload.data.providerData[0].uid, fetch: true}
    case 'GAGAL_LOGIN':
      return{...state, user_uid: null}
    case 'SET_WORDS':
      return {...state, words: actions.payload.words, fetch: true}
    case 'SET_WORD':
      return {...state, word: actions.payload.word, try:1, fetch: true}
    case 'SET_ANSWER':
      return {...state, answer: actions.payload.answer, fetch: true}
    case 'SET_NAME':
      return {...state, username: actions.payload.data}
    case 'FETCHING':
      return {...state, fetch: false}
    case 'GAME_OVER':
      return {...state, game: true, count: 0}
    case 'POST_RECORD':
      return {...state, collections: state.collections.concat(actions.payload.data), fetch: true }
    case 'GET_RECORD':
      return {...state, records: actions.payload.data, fetch: true}
    case 'REMOVE_WORD':
      return {...state, words: state.words.filter(kata => {
        return kata != actions.payload.word
      })}
    case 'RESET_GAME':
      return {...state, collections: []}
    case 'TRY_AGAIN':
      return {...state, try: state.try + 1}
    default:
      return state
  }
}
