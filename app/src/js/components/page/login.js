import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Input, {InputLabel} from 'material-ui/Input';
import {FormControl, FormHelperText} from 'material-ui/Form';
import Button from 'material-ui/Button';
import axios from 'axios';

const styles = {
    item: {
        margin: 'auto'
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
    }
}

class Login extends Component {
    state = {
        email: undefined,
        password: undefined
    };

    handleClick = () => {
        console.log(this.state);
        axios.post('http://localhost:8080/auth/login', this.state)
            .then(res => console.log(res));
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
                <Grid item xs={3} className={classes.item}>
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

export default withStyles(styles)(Login);