import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Lock from 'material-ui-icons/Lock';
import TrendingUp from 'material-ui-icons/TrendingUp';
import AttachMoney from 'material-ui-icons/AttachMoney';

import SimpleCard from 'Shared/simpleCard';

const styles = {
    header: {
        backgroundImage: "url('http://localhost:8080/images/piggy.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        height: '70vh'
    },
    container: {
        padding: '20px 10px'
    },
    paper: {
        fontSize: '20px',
        padding: '30px',
        textAlign: 'center',
    },
    icon: {
        width: '100px',
        height: '100px',
        margin: '0 auto',
        display: 'block'
    },
    green: {
        color: 'rgb(163, 169, 105)'
    },
    yellow: {
        color: 'rgb(220, 218, 46)'
    },
    orange: {
        color: 'rgb(227,189,80)'
    }
};

class Home extends Component {

    render() {
        const {classes} = this.props;

        return (
            <div>
                <div className={classes.header}></div>

                <Grid className={classes.container} container spacing={24}>
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <AttachMoney className={classes.icon + ' ' + classes.green} />
                            <Typography variant='display1'>Money</Typography>
                            <Typography>Make money, and then make more money</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <TrendingUp className={classes.icon + ' ' + classes.yellow}/>
                            <Typography variant='display1'>Increase</Typography>
                            <Typography>Your money almost always goes up</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <Lock className={classes.icon + ' ' + classes.orange}/>
                            <Typography variant='display1'>Secure</Typography>
                            <Typography>Military grade money protection</Typography>
                        </Paper>
                    </Grid>
                </Grid>

            </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);