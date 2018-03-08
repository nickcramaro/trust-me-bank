import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Lock from 'material-ui-icons/Lock';
import LockOpen from 'material-ui-icons/LockOpen';
import TrendingUp from 'material-ui-icons/TrendingUp';
import AttachMoney from 'material-ui-icons/AttachMoney';

import SimpleCard from 'Shared/simpleCard';

const styles = {
    header: {
        backgroundImage: "url('http://localhost:8080/images/piggy.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        height: '70vh',
        padding: '50px'
    },
    bannerText: {
        height: '100%',
        transform: 'translateY(50%)'
    },
    container: {
        padding: '50px'
    },
    containerAlt: {
        padding: '50px',
        backgroundColor: 'rgba(0, 0, 0, 0.03)'
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
    iconLarge: {
        width: '250px',
        height: '250px',
        margin: '0 auto',
        display: 'block'
    },
    image: {
        width: '100%'
    },
    footer: {
        backgroundColor: 'rgba(0, 0, 0, 0.54)',
        height: '300px'
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
                <div className={classes.header}>
                    <Typography className={classes.bannerText} variant='display1'>
                        Dream it. Save it. Done.
                    </Typography>
                </div>

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

                <Grid className={classes.containerAlt} container spacing={24}>
                    <Grid item xs>
                        <Typography variant='display1'>
                            Keeping your money safe is as easy as locking it up in a vault. Here at <strong>Trust Me Bank</strong> that is exactly what we do.
                            You bring us cash and we lock it up. Cold hard cash.
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <LockOpen className={classes.iconLarge + ' ' + classes.green} />
                    </Grid>
                </Grid>

                <Grid className={classes.footer} container spacing={24}>
                    
                </Grid>

            </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);