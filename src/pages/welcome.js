/**
 * Created by apple on 2017/6/21.
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TextInput,TouchableHighlight,Platform,InteractionManager} from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class Login extends Component {
    static navigationOptions = {
        header:null
    };

    componentDidMount(){
        this.timer = setTimeout(() => {
            InteractionManager.runAfterInteractions(() => {
                const resetAction = NavigationActions.reset({
                    index:0,
                    actions:[
                        NavigationActions.navigate({routeName:'Login'})
                    ]
                })
                this.props.navigation.dispatch(resetAction);
            })
        },3000)

    };

    componentWillUnmount(){
        this.timer && clearTimeout(this.timer);
    }


    render() {
        return (
           <Image style={styles.welcomeContainer}
               source={require('../images/login_bg.png')}>
               <Image style={styles.welcomeLogo}
                   source={require('../images/login_logo.png')}/>
               <Text style={styles.wleTxt}>一粒收</Text>
           </Image>
        )
    }
}



const styles = StyleSheet.create({
    welcomeContainer: {
        width:'100%',
        height:'100%',
        alignItems:'center'
    },
    welcomeLogo:{
        marginTop:Platform.OS === 'ios' ? 140 : 120,
    },
    wleTxt:{
        backgroundColor:'transparent',
        color:'#fff',
        fontWeight:'bold',
        fontSize:26,

    }
});
