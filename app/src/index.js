import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

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
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </MuiThemeProvider>
), document.getElementById('app'));