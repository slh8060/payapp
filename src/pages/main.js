/**
 * Created by apple on 2017/6/21.
 */
import React, {Component} from 'react';
import {TabNavigator, StackNavigator} from 'react-navigation';
import WelcomeScreen from './welcome';
import LoginScreen from './login/login';
import RegistScreen from './regist/regist';
import HomeScreen from './home/home';
import HoldScreen from './hold/hold';
import BalanceScreen from './balance/balance';
import MyScreen from './my/my';
import TradingRecodeScreen from './balance/trading-recode';
import TradingDetailScreen from './balance/trading-detail';


const MainScreen = TabNavigator({
        Home: {
            screen: HomeScreen
        },
        Hold: {
            screen: HoldScreen
        },
        Balance: {
            screen: BalanceScreen
        },
        My: {
            screen: MyScreen
        }
    },
    {
        tabBarOptions: {
            style: {
                backgroundColor: "#fff",
                borderTopWidth:1,
                borderTopColor:'#e0e0e0',
                paddingTop:5,
                paddingBottom:5,
            },
            activeTintColor:'#fe991b',
            inactiveTintColor:'#999',
            labelStyle:{
                fontSize:10,
                paddingTop:5
            }
        },
        tabBarPosition: 'bottom',
        showIcon:true,
        iconStyle:{
            width:22,
            height:21
        },
        indicatorStyle:{
            height:0
        },
        backBehavior:'none',
        lazy:true,
        swipeEnabled:false
    });

const App = StackNavigator({
    Welcome:{screen:WelcomeScreen},
    Login: {screen: LoginScreen},
    Regist: {screen: RegistScreen},
    Main: {screen: MainScreen},
    TradingRecode:{screen:TradingRecodeScreen},
    TradingDetail:{screen:TradingDetailScreen}

});

export default App;
