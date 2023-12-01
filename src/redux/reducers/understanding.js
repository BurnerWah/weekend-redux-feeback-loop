/** @type {import('redux').Reducer<number, ClearFeedback | SetUnderstanding>} */
export const understanding = (state = 0, action) => {
  if (action.type === 'SET_UNDERSTANDING') {
    return action.payload
  }
  if (action.type === 'CLEAR_FEEDBACK') {
    return 0
  }
  return state
}
