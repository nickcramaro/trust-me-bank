import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

import Home from 'Page/home';
import Login from 'Page/login';
import Dashboard from 'Page/dashboard';

const styles = {
    root: {
        flexGrow: 1,
        padding: 12
    },
    title: {
        margin: '0 auto 0 0'
    },
    links: {
        display: 'inline',
        padding: '0 3px',
        textDecoration: 'none',
        color: 'black'
    },
    body: {
        marginTop: '50px',
        flexGrow: 1
    }
}

class App extends Component {
    state = {
        user: false
    }

    renderNavigation = () => {
        const {classes} = this.props;

        if (this.state.user) {
            return [
                <Link className={classes.links} to='/'>Home</Link>,
                <Link className={classes.links} to='/dashboard'>Dashboard</Link>
            ];
        } else {
            return [
                <Link className={classes.links} to='/'>Home</Link>,
                <Link className={classes.links} to='/login'>Login</Link>
            ];
        }
    }

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <AppBar position='fixed' color='default'>
                            <Toolbar>
                                <Typography className={classes.title} variant='title'>
                                    Trust Me Bank ;)
                                </Typography>
                                <nav>
                                    {this.renderNavigation().map((link, i) => {
                                        return (
                                            <Typography key={i} className={classes.links} variant='subheading'>
                                                {link}
                                            </Typography>
                                        )
                                    })}
                                </nav>
                            </Toolbar>
                        </AppBar>
                    </Grid>
                    
                    <div className={classes.body}>
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route path='/login' component={Login} />
                            <Route path='/dashboard' component={Dashboard} />
                        </Switch>
                    </div>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(App);