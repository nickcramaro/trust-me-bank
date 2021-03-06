import React from 'react';
import {withStyles} from 'material-ui/styles';
import {api} from 'Src/index';
import Transfer from 'Page/dashboard/transfer';
import Faqs from 'Page/dashboard/faqs';

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
        marginRight: '10px',
        flex: '1 1 auto'
    },
    rightPanel: {
        flex: '0 0 250px',
        padding: '0 10px 10px 10px'
    },
    accountSection: {
        marginBottom: '20px'
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
        api.get('/account')
            .then(res => {
                this.setState({accounts: res.data, loading: false});
            })
            .catch(err => {
                console.error(err);
            })
    };

    sendTransfer = (recipientEmail, transferAmount) => {
        return api.post('/transaction', {
            amount: transferAmount,
            recipientEmail
        }).then(({data: account}) => {
            this.setState({accounts: [account], transferAmount: 0, recipientEmail: ''});
        });
    };

    render() {
        const {classes} = this.props;
        const {accounts, loading} = this.state;

        const defaultAccount = accounts[0];

        return (
            <div className={classes.root}>
                <h1 className={classes.title}>Dashboard</h1>
                {!loading && (
                    <div>
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
                            </div>
                            <div className={classes.rightPanel}>
                                <Transfer sendTransfer={this.sendTransfer}/>
                            </div>
                        </div>
                        <div>
                            <Faqs/>
                        </div>
                    </div>
                )}

            </div>
        );
    }
}

export default withStyles(styles)(Dashboard);