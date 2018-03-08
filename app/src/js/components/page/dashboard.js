import React, {Component} from 'react';
import Grid from 'material-ui/Grid';
import {withStyles} from 'material-ui/styles';
import axios from 'axios';

import SimpleCard from 'Shared/simpleCard';

//TODO: replace with API call
const accounts = [
    {id: 1, name: 'Chequing', amount: '304.12'},
    {id: 2, name: 'Savings', amount: '2046.25'},
    {id: 3, name: 'Credit Line', amount: '3520.12'},
    {id: 4, name: 'Visa', amount: '150.64'}
]

const styles = {

}

class Dashboard extends Component {
    state = {
        accounts: []
    }

    componentDidMount() {
        this.setState({
            accounts: accounts
        });
    }

    render() {
        const {classes} = this.props;

        return (
            <Grid className={classes.container} container spacing={24}>
                {this.state.accounts.map((a, i) => {
                    return (
                        <Grid key={i} item xs={3} className={classes.item}>
                            <SimpleCard title={a.name} body={a.amount} button='Show more'/>
                        </Grid>
                    );
                })}
            </Grid>
        );
    }
}

export default withStyles(styles)(Dashboard);