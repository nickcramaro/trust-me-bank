import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import axios from 'axios';
import './css/style.css';
import 'typeface-roboto'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {createMuiTheme} from 'material-ui/styles';
import blue from 'material-ui/colors/blue';

import App from './js/app';


const api = axios.create({
    withCredentials: true,
    baseURL: NODE_URL
});
export {api};

// //request interceptor
// axios
//     .interceptors
//     .request
//     .use(config => {
//         config.baseURL = NODE_URL;
//         if (localStorage.getItem('token')) {
//             config.headers.Authorization = 'JWT ' + localStorage.getItem('token');
//         }
// //        config.withCredentials = true;
//         return config;
//     }, error => {
//         return Promise.reject(error);
//     });
//
// //response interceptor
// axios
//     .interceptors
//     .response
//     .use(response => {
//         if (response.data.token) {
//             localStorage.setItem('token', response.data.token);
//         }
//         return response;
//     }, error => {
//         return Promise.reject(error);
//     });

const theme = createMuiTheme({
    palette: {
        primary: blue
    }
});

ReactDOM.render((
    <MuiThemeProvider theme={theme}>
        <Router>
            <App/>
        </Router>
    </MuiThemeProvider>
), document.getElementById('app'));