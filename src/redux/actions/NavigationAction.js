export const CHANGE_ACTIVE_PAGE = 'CHANGE_ACTIVE_PAGE'

export const changeActivePage = page => {
  return {
    type: CHANGE_ACTIVE_PAGE,
    payload: page,
  }
}