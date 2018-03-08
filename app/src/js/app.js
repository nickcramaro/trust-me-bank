import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import Home from 'Page/home';
import Login from 'Page/login';
import Dashboard from 'Page/dashboard';

const styles = {
    title: {
        margin: '0 auto 0 0'
    },
    navigation: {
        float: 'right'
    },
    navlink: {
        display: 'inline',
        padding: '0 3px',
        textDecoration: 'none',
        color: 'black'
    },
    toolbar: {
        padding: '0 50px'
    }
}

class App extends Component {
    state = {
        user: true
    }

    renderNavigation = () => {
        const {classes} = this.props;

        if (this.state.user) {
            return [
                <Link className={classes.navlink} to='/'>Home</Link>,
                <Link className={classes.navlink} to='/dashboard'>Dashboard</Link>
            ];
        } else {
            return [
                <Link className={classes.navlink} to='/'>Home</Link>,
                <Link className={classes.navlink} to='/login'>Login</Link>
            ];
        }
    }

    render() {
        const {classes} = this.props;

        return (
            <div>
                <AppBar position="static" color="default">
                    <Toolbar className={classes.toolbar}>
                        <Typography className={classes.title} variant="title">
                            Trust Me Bank ;)
                        </Typography>
                        <nav className={classes.navigation}>
                            {this.renderNavigation().map((link, i) => {
                                return (
                                    <Typography key={i} className={classes.navlink} variant='subheading'>
                                        {link}
                                    </Typography>
                                )
                            })}
                        </nav>
                    </Toolbar>
                </AppBar>

                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/login' component={Login} />
                    <Route path='/dashboard' component={Dashboard} />
                </Switch>
            </div>
        );
    }
}

export default withStyles(styles)(App);