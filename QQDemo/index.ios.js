/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
} from 'react-native';

// 定义一些全局的变量
var Dimensions = require('Dimensions');
var WIDTH = Dimensions.get('window').width;
var HMagin = 10;

class QQDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
            <View style={styles.headIcon}>
                <Image source={require('./img/3.png')} style={{width:100,height:100,borderRadius:50}}/>
            </View>
            <TextInput style={{width:WIDTH,height:44,borderBottomWidth:3,borderBottomColor:'red',backgroundColor:'white',
                fontSize:15,marginBottom:0.5,
            }}          defaultValue='自动获取焦点'
                        textAlign='center'
                        autoFocus={true}
                       underlineColorAndroid='red'

            />
          <TextInput style={{width:WIDTH,height:44,borderBottomWidth:3,borderBottomColor:'red',backgroundColor:'white',
              fontSize:10,
          }}          defaultValue='自动获取焦点'
                     secureTextEntry={true}
                     textAlign='center'

          />

          <View style={styles.loginButton}>
              <Text style={{color:'white',fontSize:15}}>登录</Text>
          </View>

          <View style={styles.registerText}>
              <Text style={{color:'skyblue',fontSize:13}}>无法登录</Text>
              <Text style={{color:'skyblue',fontSize:13}}>新用户</Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#ddd',
    },
    headIcon: {
        marginTop:50,
        alignItems: 'center',
        marginBottom:15,
    },
    loginButton: {
        marginTop:30,
        backgroundColor:'skyblue',
        height:44,
        marginLeft:10,
        width:WIDTH - 2 * HMagin,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
    },
    registerText: {
        marginTop:15,
        flexDirection:'row',
        width:WIDTH - 2 * HMagin,
        marginLeft:10,
        justifyContent:'space-between',
    },
});

AppRegistry.registerComponent('QQDemo', () => QQDemo);
