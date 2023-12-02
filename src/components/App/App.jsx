import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import FeelingStep from '../FeelingStep/FeelingStep'
import './App.css'

function App() {
  return (
    <HashRouter>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <Switch>
          <Route path="/feeling">
            <FeelingStep />
          </Route>
          <Route path="/">
            <Redirect to="/feeling" />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  )
}

export default App
