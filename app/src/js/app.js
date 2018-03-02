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
                        <Typography variant="title" color="inherit">
                            Trust Me Bank
                        </Typography>
                    </Toolbar>
                </AppBar>

                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/login' exact component={Login} />
                </Switch>
            </div>
        );
    }
}

export default App;