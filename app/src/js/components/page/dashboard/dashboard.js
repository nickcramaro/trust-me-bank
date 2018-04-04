import React from 'react';
import {withStyles} from 'material-ui/styles';
import axios from 'axios';
import Transfer from 'Page/dashboard/transfer';

const styles = {
    root: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif;',
        fontSize: '12px',
        maxWidth: '900px',
        margin: 'auto'
    },
    title: {
        padding: '10px',
        fontSize: '16px',
        backgroundColor: '#2196f3',
        color: 'white',
        margin: 0
    },
    content: {
        display: document.body.clientWidth > 700 ? 'flex' : 'block'
    },
    leftPanel: {
        marginLeft: '10px',
        flex: '1 1 auto'
    },
    rightPanel: {
        flex: '0 0 250px',
        padding: '0 10px 10px 10px'
    },
    accountsTable: {
        width: '100%',
        textAlign: 'left'
    }
};

class Dashboard extends React.Component {
    state = {
        accounts: [],
        loading: true
    };

    componentDidMount() {
        this.getAccounts();
    }

    getAccounts = () => {
        axios.get('/account')
            .then(res => {
                this.setState({accounts: res.data, loading: false});
            })
            .catch(err => {
                console.error(err);
            })
    };

    sendTransfer = (recipientEmail, transferAmount) => {
        return axios.post('/transaction', {
            amount: transferAmount,
            recipientEmail
        }).then(({data: account}) => {
            this.setState({accounts: [account], transferAmount: 0, recipientEmail: ''});
        });
    };

    onChangeRecipient = (event, {newValue}) => {
        this.setState({
            recipientEmail: newValue
        });
    };

    getRecipientSuggestions = ({value}) => {
        axios.post('findRecipient', {emailSearch: value})
            .then(r => this.setState({recipientSuggestions: r.data}));
    };

    clearRecipientSuggestions = () => {
        this.setState({recipientSuggestions: []});
    };

    render() {
        const {classes} = this.props;
        const {accounts, loading, recipientSuggestions, recipientEmail, transferAmount} = this.state;

        const defaultAccount = accounts[0];

        return (
            <div className={classes.root}>
                <h1 className={classes.title}>Dashboard</h1>
                {!loading && (
                    <div className={classes.content}>
                        <div className={classes.leftPanel}>
                            <div>
                                <h2 className="type--heading">Accounts</h2>
                                <table className={classes.accountsTable}>
                                    <thead>
                                    <tr>
                                        <th>Type</th>
                                        <th>Account number</th>
                                        <th>Balance</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Savings Account</td>
                                        <td>4839573918</td>
                                        <td>${defaultAccount.amount}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <h2 className="type--heading">FAQs</h2>
                            </div>
                        </div>

                        <div className={classes.rightPanel}>
                            <Transfer sendTransfer={this.sendTransfer}/>
                        </div>
                    </div>
                )}

            </div>
        );
    }
}

export default withStyles(styles)(Dashboard);