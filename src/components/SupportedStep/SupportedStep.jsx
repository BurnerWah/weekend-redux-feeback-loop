import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

export default function SupportedStep() {
  /** @type {import('redux').Dispatch<Actions>} */
  const dispatch = useDispatch()
  const history = useHistory()

  const [supported, setSupported] = useState(0)

  return (
    <div>
      <h2>How well are you being supported?</h2>
      <input
        value={supported}
        onChange={(e) => setSupported(e.target.valueAsNumber)}
        type="number"
        placeholder="1-5"
        data-testid="input"
      />
      <button
        onClick={() => {
          console.log('supported:', supported)
          dispatch({
            type: 'SET_SUPPORTED',
            payload: supported,
          })
          setSupported(0)
          history.push('/comments')
        }}
        data-testid="next"
      >
        Next
      </button>
    </div>
  )
}
