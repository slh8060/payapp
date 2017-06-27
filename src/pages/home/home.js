/**
 * Created by apple on 2017/6/22.
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TextInput, TouchableHighlight} from 'react-native';
import {StackNavigation} from 'react-navigation';

export default class Home extends Component {

    static navigationOptions = {
        header: null,
        tabBarLabel: '首页',
        headerTitleStyle: {
            alignSelf: 'center'
        },
        tabBarIcon: ({focused, tintColor}) => (
            focused ?
                <Image
                    source={require('../../images/tab_home_set.png')}
                /> :
                <Image
                    source={require('../../images/tab_balance_normal.png')}
                    style={{tintColor:tintColor}}
                />
        )
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.loginContainer}>
                <View style={styles.loginHeader}>
                    <Image source={require('../../images/home_pic.png')}
                           style={styles.loginHeader}>
                        <Text style={styles.loginTitle}>一粒收</Text>
                    </Image>

                </View>
                <View style={styles.homeMiddle}>
                    <View style={styles.homeWrap}>
                        <Image style={styles.homeImg}
                               source={require('../../images/home_menu_collect.png')}/>
                        <Text style={styles.homeTtl}>收款</Text>
                    </View>
                    <View style={styles.homeWrap}>
                        <Image style={styles.homeImg}
                               source={require('../../images/home_menu_quota.png')}/>
                        <Text style={styles.homeTtl}>收款限额</Text>
                    </View>
                    <View style={styles.homeWrap}>
                        <Image style={styles.homeImg}
                               source={require('../../images/home_menu_qualification.png')}/>
                        <Text style={styles.homeTtl}>资质</Text>
                    </View>
                    <View style={styles.homeWrap}>
                        <Image style={styles.homeImg}
                               source={require('../../images/home_menu_news.png')}/>
                        <Text style={styles.homeTtl}>消息</Text>
                    </View>

                </View>
                <View style={styles.homeBottom}>
                    <View style={styles.newEnjoy}>
                        <Image style={styles.newImg}
                               source={require('../../images/home_bg_new.png')}>
                        </Image>
                        <Text style={styles.newTtl}>新手专享</Text>

                    </View>
                    <View style={styles.firstWrap}>
                        <Text style={styles.firstTtl}>新用户首单</Text>
                    </View>
                    <View style={styles.countWrap}>
                        <Text style={styles.countNum}>8.88</Text>
                        <Text style={styles.countTtl}>折</Text>
                    </View>
                    <View style={styles.thirdWrap}>
                        <View style={styles.rowrap}>
                            <Image source={require("../../images/home_icon_cash.png")}/>
                            <Text style={styles.itemTip}>秒级提现</Text>
                        </View>
                        <View style={styles.rowrap}>
                            <Image source={require("../../images/home_icon_safety.png")}/>
                            <Text style={styles.itemTip}>多重保障</Text>
                        </View>
                    </View>
                    <TouchableHighlight style={styles.collectWrap}>
                        <Text style={styles.collectTtl}>立即收款</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.gatherWrap}>
                    <Image source={require('../../images/bottom_line_left.png')}/>
                    <Text style={styles.gatherTtl}>一粒收</Text>
                    <Image source={require('../../images/bottom_line_right.png')}/>
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
        height: 245,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginTitle: {
        fontSize: 16,
        color: '#fff',
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 32,
        alignItems: 'center'
    },
    homeMiddle: {
        width: '100%',
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 15,
        paddingBottom: 15,
        marginBottom: 15,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    homeWrap: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    homeImg: {
        width: 49,
        height: 49,
        marginBottom: 10
    },
    homeTtl: {
        color: '#666',
        fontSize: 12
    },
    homeBottom: {
        backgroundColor: '#fff',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    newEnjoy: {
        alignSelf: 'flex-start',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        paddingBottom: 5

    },
    newImg: {
        width: 73,
        height: 20,
    },
    newTtl: {
        fontSize: 12,
        position: 'absolute',
        top: 4,
        left: 10,
        backgroundColor: 'transparent',
        color: '#fff'

    },
    firstWrap: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    firstTtl: {
        fontSize: 12,
        color: '#999',
        paddingBottom: 4
    },
    countWrap: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingBottom: 20
    },
    countNum: {
        color: '#fe991b',
        fontSize: 36,
    },
    countTtl: {
        color: '#fe991b',
        fontSize: 15,
        marginBottom: 8

    },
    thirdWrap: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 25
    },
    rowrap: {
        flexDirection: 'row',
        paddingRight: 20,
        paddingLeft: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemTip: {
        fontSize: 12,
        color: '#827b73',
        paddingLeft: 5
    },
    collectWrap: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 175,
        height: 35,
        borderRadius: 50,
        backgroundColor: '#fe991b',
    },
    collectTtl: {
        color: '#fff',
        fontSize: 16

    },
    gatherWrap: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 17,
        paddingBottom: 17
    },
    gatherTtl: {
        color: '#999',
        fontSize: 12,
        paddingLeft: 5,
        paddingRight: 5
    }


});
