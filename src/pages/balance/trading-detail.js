/**
 * Created by apple on 2017/6/21.
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TextInput, TouchableHighlight, Platform, FlatList} from 'react-native';


export default class TradingDetail extends Component {
    static navigationOptions = {
        title: '交易详情',
        headerStyle: {
            backgroundColor: '#fff',
            height: Platform.OS === 'ios' ? 64 : 44
        },
        headerTitleStyle: {
            fontSize: 16,
            color: '#454545'
        },
        headerTintColor: '#454545',

    }


    render() {
        const {params} = this.props.navigation.state;
        return (
            <View style={styles.loginContainer}>
                <View style={styles.tradeDtl}>
                    <Text style={styles.tradeTtl}>交易金额</Text>
                    <Text style={styles.tradeNum}>¥ {params.money}</Text>
                    <Text style={styles.tradeState}>{params.state}</Text>
                </View>
                <View style={styles.tradeBottom}>
                    <View style={styles.tradeRow}>
                        <Text style={styles.tradeTxt}>交易类型</Text>
                        <Text style={styles.tradeTxt}>{params.type}</Text>
                    </View>
                    <View style={styles.tradeRow}>
                        <Text style={styles.tradeTxt}>付款方式</Text>
                        <Text style={styles.tradeTxt}>{params.payType}</Text>
                    </View>
                    <View style={styles.tradeRow}>
                        <Text style={styles.tradeTxt}>交易时间</Text>
                        <Text style={styles.tradeTxt}>{params.date}</Text>
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
    tradeDtl: {
        backgroundColor:'#fff',
        marginTop:15,
        marginBottom:15,
        paddingLeft:15,
        alignItems:'center',
        height:128
    },
    tradeTtl: {
        alignSelf:'flex-start',
        paddingTop:15,
        paddingBottom:20,
        color:'#999',
        fontSize:13
    },
    tradeNum: {
        color:'#333',
        fontSize:25,
        paddingBottom:5
    },
    tradeState: {
        fontSize:13,
        color:'#999'
    },
    tradeBottom:{
        backgroundColor:'#fff',
        paddingLeft:15
    },
    tradeRow:{
        borderBottomWidth:1,
        borderBottomColor:'#e0e0e0',
        height:44,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingRight:15,

    },
    tradeTxt:{
        color:'#666',
        fontSize:13
    },
});
