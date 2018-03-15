import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Input, {InputLabel} from 'material-ui/Input';
import {FormControl, FormHelperText} from 'material-ui/Form';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import axios from 'axios';

const styles = {
    container: {
        padding: '50px'
    },
    paper: {
        padding: 20
    },
    item: {
        margin: 'auto'
    },
    formControl: {
        width: '100%',
        margin: '0 0 10px 0'
    },
    button: {
        margin: '10px 0 0 0'
    }
}

class LoginForm extends Component {
    state = {
        email: undefined,
        password: undefined
    };

    handleClick = () => {
        axios.post('http://localhost:8080/auth/login', this.state)
            .then(res => {
                this.props.handleLogin();
            });
    }

    handleChange = (event, name) => {
        this.setState({
            [name]: event.target.value
        })
    }
    
    render() {
        const {classes} = this.props;

        return (
            <Grid className={classes.container} container spacing={24}>
                <Grid item xs={12} sm={6} className={classes.item}>
                    <Paper className={classes.paper}>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor='email'>Email</InputLabel>
                            <Input id='email' onChange={(e, name) => this.handleChange(e, 'email')}/>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor='password'>Password</InputLabel>
                            <Input id='password' type='password' onChange={(e, name) => this.handleChange(e, 'password')}/>
                        </FormControl>
                        <Button variant="raised" color="primary" 
                            className={classes.button} 
                            onClick={this.handleClick}>
                            Login
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(LoginForm);