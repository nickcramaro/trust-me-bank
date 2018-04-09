import React from 'react';
import {withStyles} from 'material-ui/styles';
import {api} from 'Src/index';
import Autosuggest from 'react-autosuggest';
import Button from 'material-ui/Button';

const styles = {
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
    }
};

class Transfer extends React.Component {
    state = {
        transferAmount: 0,
        recipientEmail: '',
        recipientSuggestions: []
    };

    onChangeRecipient = (event, {newValue}) => {
        this.setState({
            recipientEmail: newValue
        });
    };

    getRecipientSuggestions = ({value}) => {
        api.post('findRecipient', {emailSearch: value})
            .then(r => this.setState({recipientSuggestions: r.data}));
    };

    clearRecipientSuggestions = () => {
        this.setState({recipientSuggestions: []});
    };

    onSendTransfer = () => {
        const {sendTransfer} = this.props;
        const {transferAmount, recipientEmail} = this.state;
        sendTransfer(recipientEmail, transferAmount).then(() => {
            this.setState({transferAmount: 0, recipientEmail: ''});
        });
    };

    render() {
        const {classes} = this.props;
        const {recipientSuggestions, recipientEmail, transferAmount} = this.state;

        return (
            <form onSubmit={event => {
                event.preventDefault();
                this.onSendTransfer();
            }}>
                <h2 className="type--heading">Transfer</h2>
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
                           value={transferAmount}
                           onChange={(event) => this.setState({transferAmount: event.target.value})}
                           type="text"/>
                </div>
                <Button variant="raised" color="primary" type="submit"
                        className={classes.button}>
                    Send
                </Button>
            </form>
        );
    }
}

export default withStyles(styles)(Transfer);