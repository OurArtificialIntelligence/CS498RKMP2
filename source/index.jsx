import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react'

import { NavLink } from 'react-router-dom';

// Include your new Components here
import Home from './components/Home/Home.jsx';
import styles from './components/Home/Home.scss'
import Search from './components/Home/Search.jsx';
import Detail from './components/Home/Detail.jsx';
// Include any new stylesheets here
// Note that components' stylesheets should NOT be included here.
// They should be 'require'd in their component class file.
require('./styles/main.scss');

render(
     <Router>
        <div className="container">
          <div className="container-nav">
            <h2>Pokemon</h2>
            <NavLink exact className="nav-link" activeClassName='Home2' to='/Home'>
                <span className='inputb1'>
                <Button basic compact>Search</Button>
                </span>
            </NavLink>
            <NavLink exact className="nav-link" activeClassName='Search' to='/Search'>
                <span className='inputb2'>
                <Button basic compact>Gallery</Button>
                </span>
            </NavLink>
          </div>
            <Switch>
                <Route exact path='/Home' component={Home}/>
                <Route exact path='/Search' component={Search}/>
                <Route exact path='/Detail/:number' component={Detail}/>
                <Route render={function() {
                        return <div className="welcome"><p>POCKMON DATABASE</p>
                        <img src="https://cdn.pixabay.com/photo/2016/08/06/08/05/pokemon-1574006_1280.png" width="170px" height="150px"/>
                        <img src="https://cdn.pixabay.com/photo/2016/08/06/08/05/pokemon-1574006_1280.png" width="170px" height="150px"/>
                        <img src="https://cdn.pixabay.com/photo/2016/08/06/08/05/pokemon-1574006_1280.png" width="170px" height="150px"/>
                        </div>
                }}/>
            </Switch>
            <div className="bot" >
            </div>
        </div>
    </Router>,
    document.getElementById('app')
);
