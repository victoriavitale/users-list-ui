// Application entrypoint. Load up the application styles
require("../styles/application.scss");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Route, HashRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Home from './Home.jsx';
import User from './User.jsx';

const history = createHistory();   

const App = () => (
    <HashRouter history={history}>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/user/:id" component={User} />
        </div>
    </HashRouter>
)

ReactDOM.render(<App/>, document.body);
