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
  View
} from 'react-native';
import Schedule from './schedule';
import Booking from './booking';
import ScrollableTabView from 'react-native-scrollable-tab-view';

export default class ThreePanels extends Component {
  render() {
    return (
      <View style={{ flex:1 }}>
        <View style ={styles.topBit}>
          <Text style={styles.logo}>Маршруты</Text>
        </View>
        <ScrollableTabView
          tabBarUnderlineColor="#fff"
          tabBarBackgroundColor ='#075e54'
          tabBarActiveTextColor="#fff"
          tabBarInactiveTextColor="#88b0ac"
        >
          <Schedule tabLabel="Расписание" {...this.props} />
          <Booking tabLabel="Бронь" />
        </ScrollableTabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  logo:{
    color:'#fff',
    fontSize:23,
    margin:10,
    marginLeft:20,
    fontWeight:'500',
  },
  row:{
    flexDirection:'row'
  },
  topBit:{
    flexDirection:'row',
    alignItems:'center',
    paddingTop:15,
    backgroundColor:'#075e54',
    justifyContent:'space-between'
  },
});
