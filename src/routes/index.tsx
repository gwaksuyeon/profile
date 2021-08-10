import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';

import { ROOT_ROUTE } from 'common/variable';

const Main = loadable(() => import('pages/main'));

const Root: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROOT_ROUTE.MAIN} component={Main} />
      </Switch>
    </BrowserRouter>
  );
};

export default Root;
