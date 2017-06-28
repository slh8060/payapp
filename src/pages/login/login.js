/**
 * Created by apple on 2017/6/21.
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TextInput, TouchableHighlight, TouchableOpacity} from 'react-native';
import Toast from 'react-native-root-toast';

export default class Login extends Component {
    static navigationOptions = {
        header: null,
        title: 'login'
    };

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            userPwd: '',
            showIcon: false
        }
    }

    delName = () => {
        this.setState((state) => {
            return {
                userName: ''
            }
        })
    };
    delPwd = () => {
        this.setState((state) => {
            return {
                userPwd: ''
            }
        })
    };
    showDelIcon = () => {
        var userName = this.state.userName;
        if (userName != '') {
            this.setState((state) => {
                return {
                    showIcon:true
                }
            })
        } else {
            this.setState((state) => {
                return {
                    showIcon:false
                }
            })

        }
        Toast.show(this.state.userName)
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.loginContainer}>
                <View style={styles.loginHeader}>
                    <Image source={require('../../images/login_bg.png')}
                           style={styles.loginHeader}>
                        <Text style={styles.loginTitle}>登录</Text>
                        <Image source={require('../../images/login_logo.png')}/>
                    </Image>
                </View>
                <View style={styles.loginBody}>
                    <View style={[styles.row]}>
                        <Image style={[styles.loginIcon]}
                               source={require('../../images/login_icon_user.png')}/>
                        <TextInput onChangeText={(text) => this.setState({userName:text})}
                                   style={[styles.loginIpt]}
                                   placeholder="手机号／邮箱"
                                   onChange={this.showDelIcon}
                        />
                        <TouchableOpacity onPress={this.delName}>
                            <Image style={[styles.loginDelIcon,this.state.showIcon ? styles.display : styles.hidden]}
                                   source={require('../../images/login_del.png')}
                            />
                        </TouchableOpacity>


                    </View>
                    <View style={[styles.row]}>
                        <Image style={[styles.loginIcon]}
                               source={require('../../images/login_icon_password.png')}/>
                        <TextInput onChangeText={(text) => this.setState({userPwd: text})}
                                   style={[styles.loginIpt]}
                                   placeholder="请输入密码"
                                   password={true}
                                   value={this.state.userPwd}
                        />
                        <TouchableOpacity
                            onPress={this.delPwd}>
                            <Image style={[styles.loginDelIcon]}
                                   source={require('../../images/login_del.png')}
                            />
                        </TouchableOpacity>

                    </View>
                    <View style={[styles.forgetPwd]}>
                        <Text style={styles.fogpwd}>忘记密码？</Text>
                    </View>
                    <TouchableHighlight onPress={() => navigate('Main')}
                                        title="Home"
                                        style={styles.loginWrap}>
                        <Text style={styles.logbtn}>登 录</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => navigate('Regist')}
                                        title="Regist"
                                        style={styles.registWrap}>
                        <Text style={styles.regbtn}>注 册</Text>
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
        marginBottom: 25
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
        fontSize: 16
    },
    loginDelIcon: {
        width: 17.5,
        height: 17,
        top: -23,
        right: 0,
        position: 'absolute'
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
    },
    hidden: {
        display: 'none'
    },
    display: {
        display: 'flex'
    }


});
