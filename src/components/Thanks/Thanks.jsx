import { useHistory } from 'react-router-dom'

export default function Thanks() {
  const history = useHistory()
  return (
    <div>
      <h2>Thank You!</h2>
      <button onClick={() => history.push('/feeling')} data-testid="next">
        Leave New Feedback
      </button>
    </div>
  )
}
