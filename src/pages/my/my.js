/**
 * Created by apple on 2017/6/22.
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TextInput, TouchableHighlight, Platform} from 'react-native';
import {StackNavigation} from 'react-navigation';

export default class Home extends Component {

    static navigationOptions = {
        header: null,
        tabBarLabel: '我的',
        headerTitleStyle: {
            alignSelf: 'center'
        },
        tabBarIcon: ({focused, tintColor}) => (
            focused ?
                <Image
                    source={require('../../images/tab_my_set.png')}
                /> :
                <Image
                    source={require('../../images/tab_my_normal.png')}
                    style={{tintColor: tintColor}}
                />
        )
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.loginContainer}>
                <View style={styles.loginHeader}>
                    <Text style={styles.loginTitle}>我的</Text>
                    <Image style={styles.myIcon}
                           source={require('../../images/my_icon_head.png')}
                    />
                    <Text style={styles.myName}>啦啦啦</Text>
                </View>
                <View style={styles.homeBottom}>
                    <View style={styles.balanceRow}>
                        <View style={styles.rowLf}>
                            <Image style={styles.bleIcon}
                                   source={require('../../images/balance_icon_app.png')}
                            />
                            <Text style={styles.bleTxt}>我的银行卡</Text>
                        </View>

                        <Image style={styles.myGoto}
                            source={require('../../images/arrow_right.png')}/>
                    </View>
                    <View style={styles.balanceRow}>
                        <View style={styles.rowLf}>
                            <Image style={styles.bleIcon}
                                   source={require('../../images/my_icon_id.png')}
                            />
                            <Text style={styles.bleTxt}>实名认证</Text>
                        </View>

                        <Image style={styles.myGoto}
                               source={require('../../images/arrow_right.png')}/>
                    </View>

                </View>

                <View style={styles.homeBottom}>
                    <View style={styles.balanceRow}>
                        <View style={styles.rowLf}>
                            <Image style={styles.bleIcon}
                                   source={require('../../images/my_icon_set.png')}
                            />
                            <Text style={styles.bleTxt}>设置</Text>
                        </View>

                        <Image style={styles.myGoto}
                               source={require('../../images/arrow_right.png')}/>
                    </View>
                    <View style={styles.balanceRow}>
                        <View style={styles.rowLf}>
                            <Image style={styles.bleIcon}
                                   source={require('../../images/my_icon_share.png')}
                            />
                            <Text style={styles.bleTxt}>分享</Text>
                        </View>

                        <Image style={styles.myGoto}
                               source={require('../../images/arrow_right.png')}/>
                    </View>
                    <View style={styles.balanceRow}>
                        <View style={styles.rowLf}>
                            <Image style={styles.bleIcon}
                                   source={require('../../images/my_icon_about.png')}
                            />
                            <Text style={styles.bleTxt}>关于</Text>
                        </View>

                        <Image style={styles.myGoto}
                               source={require('../../images/arrow_right.png')}/>
                    </View>

                </View>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    loginContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f5f5f5'
    },
    loginHeader: {
        height: Platform.OS === 'ios' ? 220 : 200,
        backgroundColor: '#fe991b',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginTitle: {
        fontSize: 16,
        color: '#fff',
        backgroundColor: 'transparent',
        position: 'absolute',
        top: Platform.OS === 'ios' ? 32 : 22,
        alignItems: 'center'
    },
    myIcon: {
        width: 70,
        height: 70,
        marginTop: Platform.OS === 'ios' ? 32 : 22
    },
    myName: {
        color: '#fff',
        fontSize: 16,
        paddingTop:14
    },
    homeBottom: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft:15,
        marginTop:15
    },
    balanceRow:{
        height:44,
        borderBottomWidth:1,
        borderBottomColor:'#e0e0e0',
        flexDirection:'row',
        width:'100%',
        alignItems:'center',
        justifyContent:'space-between',
        paddingRight:15,
    },
    rowLf:{
        flexDirection:'row',
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
    },
    myGoto:{
    }

});
