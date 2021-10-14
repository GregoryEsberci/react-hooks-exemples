import { Route, Switch } from 'react-router-dom';
import { Card } from 'primereact/card';
import features from './features/features';

const routes = features.flatMap((v) => v.routes);

const Routes = () => (
  <Card className="page-container">
    <Switch>
      {/* eslint-disable-next-line react/no-array-index-key */}
      {routes.map((props, index) => <Route {...props} key={index} />)}
      <Route>
        <h1>404</h1>
      </Route>
    </Switch>
  </Card>
);

export default Routes;
