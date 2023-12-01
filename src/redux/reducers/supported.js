/** @type {import('redux').Reducer<number, ClearFeedback | SetSupported>} */
export const supported = (state = 0, action) => {
  if (action.type === 'SET_SUPPORTED') {
    return action.payload
  }
  if (action.type === 'CLEAR_FEEDBACK') {
    return 0
  }
  return state
}
