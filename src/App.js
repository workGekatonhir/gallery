import React from 'react'
import { Route, Switch } from 'react-router';
import  PackageList from './containers/PackageList';
import  GalleryApp from './components/GalleryApp';
import style from './bootstrap/bootstrap.min.css';



const App = ({ history }) => ( /* receive history object via props */
  <main history={history}>
        <Switch>
            <Route exact path={'/'} render={() => (<PackageList/>)} />
            <Route path={'/show/:id'}  component={GalleryApp} />
        </Switch>
  </main>

);

export default App
