import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import './css/style.css';
import 'typeface-roboto'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';

import App from './js/app';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

ReactDOM.render((
    <MuiThemeProvider theme={theme}>
        <Router>
            <App />
        </Router>
    </MuiThemeProvider>
), document.getElementById('app'));