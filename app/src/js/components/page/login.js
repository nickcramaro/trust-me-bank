import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Input, {InputLabel} from 'material-ui/Input';
import {FormControl, FormHelperText} from 'material-ui/Form';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import axios from 'axios';

import LoginForm from 'Shared/loginForm';
import SignupForm from 'Shared/signupForm';

const styles = {
    header: {
        backgroundColor: 'rgba(0, 0, 0, 0.03)',
        padding: '50px'
    },
    container: {
        padding: '50px'
    },
    paper: {
        padding: 20
    },
    formControl: {
        width: '100%',
        margin: '0 0 10px 0'
    },
    button: {
        margin: '10px 0 0 0'
    },
    subtext: {
        textAlign: 'center'
    }
}

class Login extends Component {
    state = {
        login: true
    }

    changeState = () => {
        this.setState({
            login: !this.state.login
        });
    }

    render() {
        const {classes} = this.props;

        return (
            <div>
                <Grid className={classes.header} container spacing={24}>
                    <Grid item xs={12}>
                        <Typography variant='display1'>
                            { this.state.login ? 'Login' : 'Signup' }
                        </Typography>
                    </Grid>
                </Grid>
                { this.state.login ? <LoginForm handleLogin={this.props.handleLogin} /> : <SignupForm /> }
                { 
                    this.state.login ? 
                    <p className={classes.subtext}>Need to sign up? <button onClick={this.changeState}>Click here</button></p> :
                    <p className={classes.subtext}>Need to login? <button onClick={this.changeState}>Click here</button></p> 
                }
            </div>
        );
    }
}

export default withStyles(styles)(Login);