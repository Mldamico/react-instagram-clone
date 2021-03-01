import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const Login = lazy(() => import('./pages/Login'));

export default function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path='/login' component={Login} />
        </Switch>
      </Suspense>
    </Router>
  );
}
