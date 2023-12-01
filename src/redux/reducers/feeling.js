/** @type {import('redux').Reducer<number, ClearFeedback | SetFeeling>} */
export const feeling = (state = 0, action) => {
  if (action.type === 'SET_FEELING') {
    return action.payload
  }
  if (action.type === 'CLEAR_FEEDBACK') {
    return 0
  }
  return state
}
