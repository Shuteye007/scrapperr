import React, {Suspense} from 'react';
import Header from "./Nav/Header";
import {Switch, Route} from 'react-router-dom';

import Home from './Pages/home';
import AboutUs from './Pages/AboutUs';

function App() {
  return (
    <Suspense fallback={<div className={"col text-center p-5"}>
</div>}>
    <Header/>
    <div></div>
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/AboutUs" component={AboutUs}/>
    </Switch>
</Suspense>
  );
}

export default App;
