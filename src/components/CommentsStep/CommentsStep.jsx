import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

export default function CommentsStep() {
  /** @type {import('redux').Dispatch<Actions>} */
  const dispatch = useDispatch()
  const history = useHistory()

  const [comments, setComments] = useState('')

  return (
    <div>
      <h2>Any comments you want to leave?</h2>
      <input
        value={comments}
        onChange={(e) => setComments(e.target.value)}
        type="text"
        placeholder="Comments"
        data-testid="input"
      />
      <button
        onClick={() => {
          console.log('comments:', comments)
          dispatch({
            type: 'SET_COMMENTS',
            payload: comments,
          })
          setComments('')
          history.push('/review')
        }}
        data-testid="next"
      >
        Next
      </button>
    </div>
  )
}
