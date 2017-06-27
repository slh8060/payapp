/**
 * Created by apple on 2017/6/21.
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TextInput, TouchableHighlight, Platform, FlatList} from 'react-native';

let data = [
    {
        key: 1,
        value: {
            uri: 'trade_icon_collect',
            type: '收款',
            payType: '交通银行信用卡',
            date: '2016-07-27 09:09:09',
            money: '555,00',
            state: '交易成功',   //交易状态有三种值，0：交易成功(绿色)，1：交易失败(红色)，2：交易中(蓝色)，
        }
    },
    {
        key: 2,
        value: {
            uri: 'trade_icon_refill',
            type: '充值',
            payType: '浙商储蓄卡',
            date: '2016-07-27 09:09:09',
            money: '45,6355,00',
            state: '交易失败',
        }
    },
    {
        key: 3,
        value: {
            uri: 'trade_icon_cash',
            type: '提现',
            payType: '浙商储蓄卡',
            date: '2016-07-27 09:09:09',
            money: '8888,00',
            state: '交易中',
        }
    },
    {
        key: 4,
        value: {
            uri: 'trade_icon_cash',
            type: '收款',
            payType: '浙商储蓄卡',
            date: '2016-07-27 09:09:09',
            money: '1001,00',
            state: '交易成功',
        }
    }


];

export default class TradingRecord extends Component {
    static navigationOptions = {
        title: '交易记录',
        headerStyle: {
            backgroundColor: '#fff',
            height: Platform.OS === 'ios' ? 64 : 44
        },
        headerTitleStyle: {
            fontSize: 16,
            color: '#454545'
        },
        /*headerRight:<Text style={{marginRight:10}}>nihsao</Text>,*/
        headerTintColor: '#454545'
    }

    constructor(props) {
        super(props);
        this._renderItem = this._renderItem.bind(this);
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.loginContainer}>
                <View style={styles.homeBottom}>
                    <FlatList
                        data={data}
                        renderItem={({item}) => this._renderItem(item) }
                    />

                </View>
            </View>
            /*<View style={styles.loginContainer}>

             <View style={styles.homeBottom}>
             <View style={styles.balanceRow}>
             <Image style={styles.bleIcon}
             source={require('../../images/trade_icon_collect.png')}
             />
             <View style={styles.recodeMdl}>
             <Text style={styles.recodeBank}>收款-交通银行信用卡</Text>
             <Text style={styles.recodeDate}>2016-12-11 09:09:09</Text>
             </View>
             <View style={styles.recodeRgt}>
             <Text style={styles.recodeNum}>¥555,00</Text>
             <Text style={styles.recodeSuccess}>交易成功</Text>
             </View>

             </View>
             <View style={styles.balanceRow}>
             <Image style={styles.bleIcon}
             source={require('../../images/trade_icon_refill.png')}
             />
             <View style={styles.recodeMdl}>
             <Text style={styles.recodeBank}>充值-浙商储蓄卡</Text>
             <Text style={styles.recodeDate}>2016-12-11 09:09:09</Text>
             </View>
             <View style={styles.recodeRgt}>
             <Text style={styles.recodeNum}>¥555,00</Text>
             <Text style={styles.recodeFailure}>交易失败</Text>
             </View>

             </View>
             <View style={styles.balanceRow}>
             <Image style={styles.bleIcon}
             source={require('../../images/trade_icon_cash.png')}
             />
             <View style={styles.recodeMdl}>
             <Text style={styles.recodeBank}>提现-浙商储蓄卡</Text>
             <Text style={styles.recodeDate}>2016-12-11 09:09:09</Text>
             </View>
             <View style={styles.recodeRgt}>
             <Text style={styles.recodeNum}>¥555,00</Text>
             <Text style={styles.recodeIng}>交易中</Text>
             </View>

             </View>
             <View style={styles.balanceRow}>
             <Image style={styles.bleIcon}
             source={require('../../images/trade_icon_cash@2x.png')}
             />
             <View style={styles.recodeMdl}>
             <Text style={styles.recodeBank}>提现-浙商储蓄卡</Text>
             <Text style={styles.recodeDate}>2016-12-11 09:09:09</Text>
             </View>
             <View style={styles.recodeRgt}>
             <Text style={styles.recodeNum}>¥555,00</Text>
             <Text style={styles.recodeSuccess}>交易成功</Text>
             </View>

             </View>



             </View>

             </View>*/
        )

    }

    _renderItem(item) {
        return (
            <TouchableHighlight onPress={() => {this.itemPress(item)}}>
                <View style={styles.balanceRow}>
                    <Image style={styles.bleIcon}
                           source={require('../../images/trade_icon_cash.png')}
                    />
                    <View style={styles.recodeMdl}>
                        <Text style={styles.recodeBank}>{`${item.value.type}-${item.value.payType}`}</Text>
                        <Text style={styles.recodeDate}>{item.value.date}</Text>
                    </View>
                    <View style={styles.recodeRgt}>
                        <Text style={styles.recodeNum}>{item.value.money}</Text>
                        <Text style={styles.recodeSuccess}>交易成功</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    itemPress(item){
        const {navigate} = this.props.navigation;
        navigate('TradingDetail',item.value)
    }

}


const styles = StyleSheet.create({
    loginContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f5f5f5'
    },
    homeBottom: {
        backgroundColor: '#fff',
        paddingLeft: 15,
        marginTop: 15
    },
    balanceRow: {
        height: 70,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 15,
        position: 'relative'
    },
    bleIcon: {
        width: 40,
        height: 40
    },
    recodeMdl: {
        paddingLeft: 15,
        alignItems: 'flex-start',
    },
    recodeBank: {
        fontSize: 15,
        color: '#454545',
        paddingBottom: 10,

    },
    recodeDate: {
        fontSize: 12,
        color: '#999'
    },
    recodeRgt: {
        alignItems: 'flex-end',
        position: 'absolute',
        right: 15
    },
    recodeNum: {
        color: '#454545',
        fontSize: 15,
        paddingBottom: 15,


    },
    recodeSuccess: {
        color: '#35bf4b',
        fontSize: 12

    },
    recodeFailure: {
        color: '#f7745f',
        fontSize: 12
    },
    recodeIng: {
        color: '#68c0f8',
        fontSize: 12
    }

});
