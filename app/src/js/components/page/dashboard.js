import React from 'react';
import {withStyles} from 'material-ui/styles';
import axios from 'axios';
import Autosuggest from 'react-autosuggest';
import Button from 'material-ui/Button';

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
        display: document.body.clientWidth > 700 ? 'flex': 'block'
    },
    leftPanel: {
        marginLeft: '10px',
        flex: '1 1 auto'
    },
    rightPanel: {
        flex: '0 0 250px',
        padding: '0 10px 10px 10px'
    },
    heading: {
        fontSize: '16px',
        display: 'inline-block',
        borderBottom: '#2196f3 3px solid',
        padding: '8px 8px 4px 8px',
        marginBottom: '8px',
        marginTop: '0'
    },
    formControl: {
        width: '100%',
        margin: '0 0 10px 0'
    },
    formLabel: {
        display: 'block'
    },
    formInput: {
        width: '100%'
    },
    button: {
        margin: '10px 0 0 0'
    },
    accountsTable: {
        width: '100%',
        textAlign: 'left'
    }
};

class Dashboard extends React.Component {
    state = {
        accounts: [],
        loading: true,
        transferAmount: 0,
        recipientEmail: '',
        recipientSuggestions: []
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

    sendTransfer = () => {
        const {transferAmount, recipientEmail} = this.state;

        axios.post('/transaction', {
            amount: transferAmount,
            recipientEmail
        }).then(({data: account}) => {
            this.setState({accounts: [account]});
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
        const {accounts, loading, recipientSuggestions, recipientEmail} = this.state;

        const defaultAccount = accounts[0];

        return (
            <div className={classes.root}>
                <h1 className={classes.title}>Dashboard</h1>
                {!loading && (
                    <div className={classes.content}>
                        <div className={classes.leftPanel}>
                            <div>
                                <h2 className={classes.heading}>Accounts</h2>
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
                                <h2 className={classes.heading}>FAQs</h2>
                            </div>
                        </div>

                        <div className={classes.rightPanel}>
                            <form onSubmit={event => {
                                event.preventDefault();
                                this.sendTransfer();
                            }}>
                                <h2 className={classes.heading}>Transfer</h2>
                                <div className={classes.formControl}>
                                    <label className={classes.formLabel} htmlFor="recipient">Recipient email</label>
                                    <Autosuggest
                                        suggestions={recipientSuggestions}
                                        onSuggestionsFetchRequested={this.getRecipientSuggestions}
                                        onSuggestionsClearRequested={this.clearRecipientSuggestions}
                                        getSuggestionValue={user => user.email}
                                        renderSuggestion={user =>
                                            <div>{user.firstName} {user.lastName} ({user.email})</div>}
                                        inputProps={{
                                            value: recipientEmail,
                                            onChange: this.onChangeRecipient,
                                            id: 'recipient',
                                            className: classes.formInput
                                        }}
                                    />
                                </div>
                                <div className={classes.formControl}>
                                    <label className={classes.formLabel} htmlFor="amount">Amount</label>
                                    <input id="amount" className={classes.formInput}
                                           onChange={(event) => this.setState({transferAmount: event.target.value})}
                                           type="text"/>
                                </div>
                                <Button variant="raised" color="primary" type="submit"
                                        className={classes.button}>
                                    Send
                                </Button>
                            </form>
                        </div>
                    </div>
                )}

            </div>
        );
    }
}

export default withStyles(styles)(Dashboard);