import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import Home from 'Page/home';
import Login from 'Page/login';

class App extends Component {
    render() {
        return (
            <div>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography variant="title">
                            Trust Me Bank
                        </Typography>
                    </Toolbar>
                </AppBar>

                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/login' component={Login} />
                </Switch>
            </div>
        );
    }
}

export default App;