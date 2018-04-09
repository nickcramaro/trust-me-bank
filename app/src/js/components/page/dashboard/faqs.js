import React from 'react';
import {withStyles} from 'material-ui/styles';
import marked from 'marked';
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

class Faqs extends React.Component {
    state = {
        faqSearch: ''
    };

    render() {
        const {faqSearch} = this.state;
        const {classes} = this.props;

        console.log('marked', marked('# Marked in browser\n\nRendered by **marked**.'));

        return (
            <div>
                <h2 className="type--heading">FAQs</h2>
                <div className={classes.formControl}>
                    <label className={classes.formLabel} htmlFor="faq-search">Search</label>
                    <input id="faq-search" className={classes.formInput}
                           value={faqSearch}
                           onChange={(event) => this.setState({faqSearch: event.target.value})}
                           type="text"/>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Faqs);