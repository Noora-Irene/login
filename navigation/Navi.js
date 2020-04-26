import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Main from '../screens/Main';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Loading from '../screens/Loading';

const Navi = createStackNavigator({
    
    Main: Main,
    Login: Login,
    SignUp: SignUp,
    Loading: Loading
    
    },
        {
            initialRouteName: 'Loading',
            headerMode: 'none'
        }
);

export default createAppContainer(Navi);