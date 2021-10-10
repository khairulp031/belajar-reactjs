import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { MemoryRouter as Router, Route, Switch } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import Provider from './base/hooks/context'
const App = React.lazy(() => import('./base/App'))

ReactDOM.render(
  <Provider>
    <Suspense fallback="Loading">
      <Router >
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </Router>
    </Suspense>
  </Provider>,
  document.getElementById('root')
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.info)
