import React from 'react';
import {withStyles} from 'material-ui/styles';
import marked from 'marked';
import Button from 'material-ui/Button';
import {api} from 'Src/index';

const styles = {
    faqComponent: {
        margin: '0 10px'
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
    faqItem: {
        padding: '10px',
        margin: '10px',
        borderBottom: '1px solid #ddd'
    }
};

class Faqs extends React.Component {
    state = {
        newQuestion: '',
        faqs: []
    };

    componentDidMount() {
        api.get('/faq').then((res) => {
            this.setState({faqs: res.data});
        });
    }

    askQuestion() {
        const {newQuestion, faqs} = this.state;

        api.post('/faq', {question: newQuestion})
            .then(response => {
                this.setState({
                    faqs: [response.data, ...faqs],
                    newQuestion: ''
                });
            });
    }

    render() {
        const {newQuestion, faqs} = this.state;
        const {classes} = this.props;

        return (
            <div className={classes.faqComponent}>
                <h2 className="type--heading">FAQs</h2>
                <form onSubmit={event => {
                    event.preventDefault();
                    this.askQuestion();
                }}>
                    <div className={classes.formControl}>
                        <label className={classes.formLabel} htmlFor="new-faq">Question</label>
                        <textarea id="new-faq" className={classes.formInput}
                                  value={newQuestion}
                                  onChange={(event) => this.setState({newQuestion: event.target.value})}/>
                    </div>
                    <Button variant="raised" color="primary" type="submit"
                            className={classes.button}>
                        Ask Question
                    </Button>
                </form>

                <div>
                    {faqs.slice(0, 20).map(faq => (
                        <div className={classes.faqItem} key={faq._id} dangerouslySetInnerHTML={{__html: marked(faq.question, {sanitize: true})}}/>
                    ))}
                </div>

            </div>
        );
    }
}

export default withStyles(styles)(Faqs);