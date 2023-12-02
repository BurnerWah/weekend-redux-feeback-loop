import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

export default function UnderstandingStep() {
  /** @type {import('redux').Dispatch<Actions>} */
  const dispatch = useDispatch()
  const history = useHistory()

  const [understanding, setUnderstanding] = useState(0)

  return (
    <div>
      <h2>How well are you understanding the content?</h2>
      <input
        value={understanding}
        onChange={(e) => setUnderstanding(e.target.valueAsNumber)}
        type="number"
        placeholder="1-5"
        data-testid="input"
      />
      <button
        onClick={() => {
          console.log('understanding:', understanding)
          dispatch({
            type: 'SET_UNDERSTANDING',
            payload: understanding,
          })
          setUnderstanding(0)
          history.push('/supported')
        }}
        data-testid="next"
      >
        Next
      </button>
    </div>
  )
}
