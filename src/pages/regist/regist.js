/**
 * Created by apple on 2017/6/21.
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TextInput, TouchableHighlight,Platform} from 'react-native';

export default class Regist extends Component {

    static navigationOptions = {
      /*  headerTitle:"Regist",
        headerStyle:{
            backgroundColor:'#f0f0f0',
            height:Platform.OS === 'ios' ? 64 : 44
        },
        headerTitleStyle:{
            fontSize:16,
            color:'#fff'
        }*/
      header:null

    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.loginContainer}>
                <View style={styles.loginHeader}>
                    <Image source={require('../../images/login_bg.png')}
                           style={styles.loginHeader}>
                        <Text style={styles.loginTitle}>注册</Text>
                        <Image source={require('../../images/login_logo.png')}/>
                    </Image>
                </View>
                <View style={styles.loginBody}>
                    <View style={[styles.row]}>
                        <Image style={[styles.loginIcon]}
                               source={require('../../images/login_icon_user.png')}/>
                        <TextInput style={[styles.loginIpt]}
                                   placeholder="手机号／邮箱"/>
                        <Image style={[styles.loginDelIcon]}
                               source={require('../../images/login_del.png')}
                        />
                    </View>
                    <View style={[styles.row]}>
                        <View style={[styles.getCodeIptWrap]}>
                            <Image style={[styles.loginIcon]}
                                   source={require('../../images/login_icon_validate.png')}/>
                            <TextInput style={styles.getCodeIpt}
                                       placeholder="请填写验证码"/>
                        </View>
                        <View style={styles.getCodeBtnWrap}>
                            <Text style={styles.getCodeBtn}>获取验证码</Text>

                        </View>

                    </View>
                    <View style={[styles.row]}>
                        <Image style={[styles.loginIcon]}
                               source={require('../../images/login_icon_password.png')}/>
                        <TextInput style={[styles.loginIpt]}
                                   placeholder="请输入密码"
                                   password={true}
                        />
                        <Image style={[styles.loginDelIcon]}
                               source={require('../../images/login_del.png')}
                        />
                    </View>
                    <View style={[styles.row]}>
                        <Image style={[styles.loginIcon]}
                               source={require('../../images/login_icon_recommend.png')}/>
                        <TextInput style={[styles.loginIpt]}
                                   placeholder="请填写推荐人(可选填)"
                                   password={true}
                        />
                        <Image style={[styles.loginDelIcon]}
                               source={require('../../images/login_del.png')}
                        />
                    </View>


                    <TouchableHighlight onPress={() => navigate('Login')}
                                        title="Login"
                                        style={styles.loginWrap}>
                        <Text style={styles.logbtn}>登 录</Text>
                    </TouchableHighlight>

                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    loginContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff'
    },
    loginHeader: {
        height: 255,
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
    loginBody: {
        paddingTop: 24,
        width: '100%',
        alignItems: 'center',
    },
    row: {
        width: 285,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        marginBottom: 25,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    loginIcon: {
        width: 15,
        height: 17,
        position: 'absolute',
        top: 10,
        left: 0
    },
    loginIpt: {
        height: 34,
        lineHeight: 34,
        paddingLeft: 20,
        color: '#454545',
        fontSize: 16,
        width:'100%'
    },
    getCodeIptWrap: {
        height: 34,
        width: 180,
        marginBottom:5,
        borderRightColor: '#e0e0e0',
        borderRightWidth: 1,
        alignItems:'flex-start',
    },
    getCodeIpt: {
        height: 34,
        lineHeight: 34,
        paddingLeft: 20,
        color: '#454545',
        fontSize: 16,
        width: 180,
    },
    getCodeBtnWrap:{
        padding: 10,
        width:105,
        alignItems:'center',
    },
    getCodeBtn: {
        color: '#fe991b',
        borderRadius: 4,

    },
    loginDelIcon: {
        width: 17.5,
        height: 17,
        position: 'absolute',
        top: 10,
        right: 0
    },
    forgetPwd: {
        width: 285,
        alignItems: 'flex-end',
    },
    fogpwd: {
        fontSize: 13,
        color: '#454545'
    },
    loginWrap: {
        width: 285,
        backgroundColor: '#fe991b',
        borderRadius: 50,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 30
    },
    logbtn: {
        fontSize: 16,
        color: '#fff'
    },
    registWrap: {
        width: 285,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#fe991b',
        backgroundColor: '#fff',
        borderRadius: 50,


    },
    regbtn: {
        fontSize: 16,
        color: '#fe991b'
    }


});
