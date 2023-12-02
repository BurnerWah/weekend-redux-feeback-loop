import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import CommentsStep from '../CommentsStep/CommentsStep'
import FeelingStep from '../FeelingStep/FeelingStep'
import Review from '../Review/Review'
import SupportedStep from '../SupportedStep/SupportedStep'
import UnderstandingStep from '../UnderstandingStep/UnderstandingStep'
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
          <Route path="/understanding">
            <UnderstandingStep />
          </Route>
          <Route path="/supported">
            <SupportedStep />
          </Route>
          <Route path="/comments">
            <CommentsStep />
          </Route>
          <Route path="/review">
            <Review />
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
