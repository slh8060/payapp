/**
 * Created by apple on 2017/6/21.
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TextInput,TouchableHighlight,Platform} from 'react-native';

export default class Balance extends Component {
    static navigationOptions = {
        header:null,
        tabBarLabel:'余额',
        tabBarIcon:({focused,tintColor}) => (
            focused ?
                <Image source={require('../../images/tab_balance_set.png')}/> :
                <Image source={require('../../images/tab_balance_normal.png')}/>
        )
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.loginContainer}>
                <View style={styles.loginHeader}>
                    <Image source={require('../../images/balance_bg.png')}
                           style={styles.loginHeader}>
                        <Text style={styles.loginTitle}>余额</Text>
                        <Text onPress={() => navigate('TradingRecode')}
                            style={styles.balanceRecod}>交易记录</Text>
                        <Text style={styles.balanceTxt}>个人余额(元)</Text>
                        <Text style={styles.balanceNum}>88888.00</Text>
                    </Image>
                </View>
                <View style={styles.homeMiddle}>
                    <View style={styles.homeWrap}>
                        <Image style={styles.homeImg}
                               source={require('../../images/balance_icon_refill.png')}/>
                        <Text style={styles.homeTtl}>充值</Text>
                    </View>
                    <View style={styles.homeWrap}>
                        <Image style={styles.homeImg}
                               source={require('../../images/balance_icon_cash.png')}/>
                        <Text style={styles.homeTtl}>提现</Text>
                    </View>


                </View>
                <View style={styles.homeBottom}>
                    <View style={styles.balanceRow}>
                        <Image style={styles.bleIcon}
                               source={require('../../images/balance_icon_app.png')}
                        />
                        <Text style={styles.bleTxt}>一粒收金额</Text>
                    </View>
                    <View style={styles.balanceRow}>
                        <Image style={styles.bleIcon}
                               source={require('../../images/balance_icon_credit.png')}
                        />
                        <Text style={styles.bleTxt}>信用卡金额</Text>
                    </View>
                    <View style={styles.balanceRow}>
                        <Image style={styles.bleIcon}
                               source={require('../../images/balance_icon_cash.png')}
                        />
                        <Text style={styles.bleTxt}>储蓄卡金额</Text>
                    </View>

                </View>

            </View>
        )
    }
}



const styles = StyleSheet.create({
    loginContainer: {
        width:'100%',
        height:'100%',
        backgroundColor:'#f5f5f5'
    },
    loginHeader: {
        height: Platform.OS === 'ios' ? 220 : 200,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginTitle: {
        fontSize: 16,
        color: '#fff',
        backgroundColor: 'transparent',
        position: 'absolute',
        top: Platform.OS === 'ios' ? 32 : 22,
    },
    balanceRecod:{
        fontSize: 16,
        color: '#fff',
        backgroundColor: 'transparent',
        position: 'absolute',
        top: Platform.OS === 'ios' ? 32 : 22,
        right:15,
    },
    balanceTxt:{
        color:'#fff',
        fontSize:12,
        backgroundColor:'transparent',
        paddingTop:64,
        paddingBottom:15
    },
    balanceNum:{
        color:'#fff',
        fontSize:44,
        backgroundColor:'transparent'
    },
    homeMiddle: {
        marginBottom: 15,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height:50
    },
    homeWrap: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    homeImg: {
        width: 20,
        height: 20,
        marginRight: 10
    },
    homeTtl: {
        color: '#f7745f',
        fontSize: 17
    },
    homeBottom: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft:15,

    },
    balanceRow:{
        height:44,
        borderBottomWidth:1,
        borderBottomColor:'#e0e0e0',
        flexDirection:'row',
        width:'100%',
        alignItems:'center'
    },
    bleIcon:{
        width:20,
        height:20
    },
    bleTxt:{
        color:'#454545',
        fontSize:15,
        paddingLeft:15
    }


});
