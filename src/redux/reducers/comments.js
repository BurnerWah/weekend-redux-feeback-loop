/** @type {import('redux').Reducer<string, ClearFeedback | SetComments>} */
export const comments = (state = '', action) => {
  if (action.type === 'SET_COMMENTS') {
    return action.payload
  }
  if (action.type === 'CLEAR_FEEDBACK') {
    return ''
  }
  return state
}
