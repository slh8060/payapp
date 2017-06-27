/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import App from './src/pages/main'
import Login from './src/pages/login/login'

export default class payapp extends Component {
    render() {
        return (
            <App/>
        )
    }
}


AppRegistry.registerComponent('payapp', () => payapp);
