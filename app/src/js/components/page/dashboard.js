import React, {Component} from 'react';
import Grid from 'material-ui/Grid';
import {withStyles} from 'material-ui/styles';
import axios from 'axios';
import Typography from 'material-ui/Typography';
import SimpleCard from 'Shared/simpleCard';

//TODO: replace with API call
const accounts = [
    {
        id: 1,
        name: 'Chequing',
        amount: '304.12'
    }, {
        id: 2,
        name: 'Savings',
        amount: '2046.25'
    }, {
        id: 3,
        name: 'Credit Line',
        amount: '3520.12'
    }, {
        id: 4,
        name: 'Visa',
        amount: '150.64'
    }
]

const styles = {
    root: {
        flexGrow: 1
    },
    header: {
        backgroundColor: 'rgba(0, 0, 0, 0.03)',
        padding: '50px'
    },
    container: {
        padding: '50px'
    }
}

class Dashboard extends Component {
    state = {
        accounts: []
    }

    componentDidMount() {
        this.setState({accounts: accounts});
    }

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Grid className={classes.header} container spacing={24}>
                    <Grid item xs={12}>
                        <Typography variant='display1'>
                            Dashboard
                        </Typography>
                    </Grid>
                </Grid>

                <Grid className={classes.container} container spacing={24}>
                    {this
                        .state
                        .accounts
                        .map((a, i) => {
                            return (
                                <Grid key={i} item xs={12} sm={6} md={3} className={classes.item}>
                                    <SimpleCard title={a.name} body={a.amount} button='Show more'/>
                                </Grid>
                            );
                        })}
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Dashboard);