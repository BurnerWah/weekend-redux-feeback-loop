import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

export default function Review() {
  /** @type {import('redux').Dispatch<Actions>} */
  const dispatch = useDispatch()
  const history = useHistory()

  const feeling = useSelector((/** @type {RootState} */ state) => state.feeling)
  const understanding = useSelector(
    (/** @type {RootState} */ state) => state.understanding,
  )
  const supported = useSelector(
    (/** @type {RootState} */ state) => state.supported,
  )
  const comments = useSelector(
    (/** @type {RootState} */ state) => state.comments,
  )

  return (
    <div>
      <h2>Review Your Feedback</h2>
      <p>Feelings: {feeling}</p>
      <p>Understanding: {understanding}</p>
      <p>Support: {supported}</p>
      <p>Comments: {comments}</p>
      <button
        onClick={async () => {
          try {
            await axios.post('/feedback', {
              feeling,
              understanding,
              supported,
              comments,
            })
            dispatch({ type: 'CLEAR_FEEDBACK' })
            history.push('/thanks')
          } catch (error) {
            console.error(error)
          }
        }}
        data-testid="next"
      >
        Submit
      </button>
    </div>
  )
}
