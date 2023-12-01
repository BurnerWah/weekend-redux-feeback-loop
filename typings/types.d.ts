interface RootState {
  feeling: number
  understanding: number
  supported: number
  comments: string
}

interface ClearFeedback {
  type: 'CLEAR_FEEDBACK'
}

interface SetFeeling {
  type: 'SET_FEELING'
  payload: number
}

interface SetUnderstanding {
  type: 'SET_UNDERSTANDING'
  payload: number
}

interface SetSupported {
  type: 'SET_SUPPORTED'
  payload: number
}

interface SetComments {
  type: 'SET_COMMENTS'
  payload: string
}
