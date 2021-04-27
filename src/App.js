import React from 'react'

import Signin from './Components/Signin'
import Home from './Components/Home'
import Header from './Components/Header'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Signup from './Components/Signup'
import Category from './Components/Category'
import SubCategory from './Components/Subcategory'
import Product from './Components/Products'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>

          <Route exact path='/Home'>
            <Header />
            <Home />
          </Route>

          <Route exact path='/Signin'>
          <Signin />
          </Route>

          <Route exact path='/Signup'>
          <Signup />
          </Route>

          <Route exact path='/menu/category'>
          <Header />
          <Category />
          </Route>

          <Route exact path='/menu/category/:id/subcategory/'>
          <Header />
          <SubCategory />         
          </Route>

          <Route exact path='/menu/product'>
          <Header />
          <Product />
          </Route>







        </Switch>

      </div>

    </Router>

  )
}

export default App
