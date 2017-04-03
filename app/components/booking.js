/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  ListView,
  Image,
  TouchableOpacity,
  Text,
  View
} from 'react-native';
import CheckBox from 'react-native-checkbox';

import renderImages from '../fake/fakeImage';
import { images, data } from '../fake/fakeChatList';

// const images = R.range(1, 11).map(i => require(`../images/image${i}.jpeg`))
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.isViewed !== r2.isViewed});

export default class Booking extends Component {
  constructor(props){
    super(props)

    this.state = {
      dataSource: ds.cloneWithRows(data)
    }
  }

  eachMessage(x) {
    return (
        <TouchableOpacity>
          <View style={{ alignItems:'center', padding:10, flexDirection:'row',
                  borderBottomWidth:1,
                  borderColor:'#f7f7f7' }}>
              {
                  renderImages(x.image)
              }
            <View>
              <View style={{ flexDirection:'row' }}>
                <Text style={{ marginLeft:15, fontWeight:'600' }}>+37533{Math.floor((Math.random() * 9999999) + 1000000)}</Text>
                <Text style={{ color:'#333', fontSize:10, marginLeft:20 }}>{x.time}</Text>
              </View>
              <View style={{ flexDirection:'row', alignItems:'center', marginLeft:15 }}>
                <Text style={{ fontWeight:'500', color:'#222' }}>{x.message}</Text>
              </View>
            </View>
            <View style={{flexGrow: 1}}></View>
            <View style={{ flexDirection:'row', alignItems:'center' }}>
              <CheckBox label=""/>
            </View>
          </View>
        </TouchableOpacity>
      )
  }

  render() {
    return (
      <View style={{ flex:1 }}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => this.eachMessage(rowData)}
        />
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
