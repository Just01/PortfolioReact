import { CHANGE_ACTIVE_PAGE } from '../actions'

const initialState = {
  activePage: 'home',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ACTIVE_PAGE:
      return {
        ...state,
        activePage: action.payload,
      }
    default:
      return {
        ...state
      }
  }
}