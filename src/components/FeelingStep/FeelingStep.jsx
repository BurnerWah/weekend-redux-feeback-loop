import { useState } from 'react'
import { useDispatch } from 'react-redux'

export default function FeelingStep() {
  /** @type {import('redux').Dispatch<Actions>} */
  const dispatch = useDispatch()

  const [feelingInput, setFeelingInput] = useState(0)

  return (
    <div>
      <h2>How are you feeling today?</h2>
      <input
        value={feelingInput}
        onChange={(e) => setFeelingInput(e.target.valueAsNumber)}
        type="number"
        placeholder="1-5"
      />
      <button
        onClick={() => {
          console.log('feelingInput:', feelingInput)
          dispatch({
            type: 'SET_FEELING',
            payload: feelingInput,
          })
        }}
      >
        Next
      </button>
    </div>
  )
}
