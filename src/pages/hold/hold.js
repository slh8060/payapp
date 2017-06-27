/**
 * Created by apple on 2017/6/22.
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TextInput, TouchableHighlight, Platform} from 'react-native';
import {StackNavigation} from 'react-navigation';

export default class Home extends Component {

    static navigationOptions = {
        headerLeft: null,
        title: '一粒收',
        headerTitleStyle: {
            color: '#454545',
            fontSize: 16,
        },
        headerStyle: {
            backgroundColor: '#fff',
            height: Platform.OS === 'ios' ? 64 : 44,
            elevation: 0,
        },
        tabBarLabel: '收钱',
        tabBarIcon: ({focused, tintColor}) => (
            focused ?
                <Image
                    source={require('../../images/tab_collect_set.png')}
                /> :
                <Image
                    source={require('../../images/tab_collect_normal.png')}
                    style={{tintColor: tintColor}}
                />
        )
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.loginContainer}>
                <View style={styles.loginHeader}>
                    <Image source={require('../../images/collect_pic.png')}/>
                </View>
                <View style={styles.homeMiddle}>
                    <View style={styles.mdeLeft}>
                        <Text style={styles.lmtTip}>每日信用卡交易限额</Text>
                        <Text style={styles.lmtNum}>¥20,000.00</Text>
                    </View>
                    <TouchableHighlight style={styles.mdeRight}>
                        <Text style={styles.holdBtn}>收款</Text>
                    </TouchableHighlight>

                </View>
                <View style={styles.homeBottom}>
                    <View style={styles.holdRow}>
                        <Image style={styles.holdImg}
                               source={require('../../images/collect_icon_flexible.png')}
                        />
                        <Text style={styles.holdPoint}>灵活</Text>
                        <Text style={styles.holdDescribe}>收款提现</Text>
                        <Text style={styles.holdDescribe}>多种选择</Text>
                    </View>
                    <View style={styles.holdRow}>
                        <Image style={styles.holdImg}
                               source={require('../../images/collect_icon_safe.png')}
                        />
                        <Text style={styles.holdPoint}>安全</Text>
                        <Text style={styles.holdDescribe}>多重保障</Text>
                        <Text style={styles.holdDescribe}>值得信赖</Text>
                    </View>
                    <View style={styles.holdRow}>
                        <Image style={styles.holdImg}
                               source={require('../../images/collect_icon_fast.png')}
                        />
                        <Text style={styles.holdPoint}>快速</Text>
                        <Text style={styles.holdDescribe}>妙极提现</Text>
                        <Text style={styles.holdDescribe}>方便你我</Text>
                    </View>

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
        height: 210,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15
    },

    homeMiddle: {
        width: '100%',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 24,
        paddingBottom: 24,
        marginBottom: 15,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mdeLeft: {
        flex: 2,
        alignSelf: 'flex-start',
    },
    lmtTip: {
        color: '#666',
        fontSize: 12,
    },
    lmtNum: {
        color: '#fe991b',
        fontSize: 32,
    },
    mdeRight: {
        flex: 1,
        width: 93,
        height: 40,
        backgroundColor: '#fe991b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    },
    holdBtn: {
        color: '#fff',
        fontSize:16
    },
    homeBottom: {
        paddingTop: 26,
        paddingBottom: 26,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    holdRow: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    holdImg: {
        width: 60,
        height: 50,
        marginBottom: 10
    },
    holdPoint: {
        color: '#454545',
        fontSize: 14,
    },
    holdDescribe: {
        color: '#999',
        fontSize: 14,
        paddingTop: 5,

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
    },


});
