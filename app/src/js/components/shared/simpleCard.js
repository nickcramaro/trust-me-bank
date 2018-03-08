import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Card, {CardActions, CardContent} from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    card: {
        minWidth: 275
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
        color: theme.palette.text.primary
    },
    pos: {
        marginBottom: 12,
        color: theme.palette.text.secondary
    }
});

function SimpleCard(props) {
    const {classes, title, subtitle, body, button} = props;

    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title}>{title}</Typography>
                    <Typography className={classes.pos}>{subtitle}</Typography>
                    <Typography component='p'>
                        {body}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small'>{button}</Button>
                </CardActions>
            </Card>
        </div>
    );
}

SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    body: PropTypes.string,
    button: PropTypes.string
};

export default withStyles(styles)(SimpleCard);