import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/common/Header/Header';
import HomeIndex from '../components/Home/HomeIndex';
import ProgramAgenda from '../components/Program/ProgramAgenda';
import ProgramTalkDetail from '../components/Program/ProgramTalkDetail';
import NotFound from '../components/common/NotFound/NotFound'

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Switch>
          {/* Las rutas se evaluan de arriba hacia abajo */}
          <Route exact path="/" component={ HomeIndex } />
          <Route exact path="/program" component={ ProgramAgenda } />
          <Route path="/program/:slug" component={ ProgramTalkDetail } />
          <Route component={ NotFound } />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Router;