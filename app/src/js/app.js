import React, {Component} from 'react';
import {Switch, Route, Link, Redirect} from 'react-router-dom';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

import Home from 'Page/home';
import Login from 'Page/login';
import Dashboard from 'Page/dashboard/dashboard';

const styles = {
    root: {
        flexGrow: 1,
        padding: 12
    },
    headerContainer: {
        height: '56px'
    },
    header: {
        height: '56px',
        minHeight: '56px'
    },
    title: {
        margin: '0 auto 0 0',
        fontSize: '16px'
    },
    subTitle: {
        fontStyle: 'italic',
        fontWeight: 'normal'
    },
    links: {
        display: 'inline',
        padding: '0 3px',
        textDecoration: 'none',
        color: 'black',
        fontSize: '14px'
    },
    body: {
        marginTop: '32px',
        flexGrow: 1
    }
};

class App extends Component {
    state = {
        loggedIn: false
    };

    componentDidMount() {
        if (document.cookie.includes('sessionToken')) {
            this.logMeIn();
        }

        // //JWT header authorization
        // if (localStorage.getItem('token')) {
        //     this.logMeIn();
        // }
    }

    renderNavigation = () => {
        const {classes} = this.props;

        if (this.state.loggedIn) {
            return [
                <Link className={classes.links} to='/'>Home</Link>,
                <Link className={classes.links} to='/dashboard'>Dashboard</Link>,
                <Link className={classes.links} to='/' onClick={this.logMeOut}>Log Out</Link>
            ];
        } else {
            return [
                <Link className={classes.links} to='/'>Home</Link>,
                <Link className={classes.links} to='/login'>Login/Register</Link>
            ];
        }
    };

    logMeIn = () => {
        this.setState({loggedIn: true});
    };

    logMeOut = () => {
        this.deleteAllCookies();
        //localStorage.removeItem('token');
        this.setState({loggedIn: false});
    };

    //https://stackoverflow.com/a/179514/373655
    deleteAllCookies() {
        let cookies = document.cookie.split(";");

        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i];
            let eqPos = cookie.indexOf("=");
            let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
    }

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <AppBar position='fixed' color='default' className={classes.headerContainer}>
                            <Toolbar className={classes.header}>
                                <Typography className={classes.title} variant='title'>
                                    TrustMe<span className={classes.subTitle}>Bank</span> ;)
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
                            <Route exact path='/' component={Home}/>
                            <Route path='/login' render={() => (
                                this.state.loggedIn ?
                                    <Redirect push to='/dashboard'/> :
                                    <Login handleLogin={this.logMeIn}/>
                            )}/>
                            <Route path='/dashboard' component={Dashboard}/>
                        </Switch>

                    </div>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(App);