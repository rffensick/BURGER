import React, { Component } from 'react'
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgetBuilder/BurgerBuilder'
import { hot } from 'react-hot-loader'
import Checkout from './containers/Checkout/Checkout'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/" component={BurgerBuilder} />
        </Switch>
      </Layout>
    )
  }
}

export default hot(module)(App)
