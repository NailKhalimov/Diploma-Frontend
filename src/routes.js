import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/layout';

import Auth from './components/auth/index';

class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path='/' exact component={Auth}/>
        </Switch>
      </Layout>
    )
  }
}

export default Routes;