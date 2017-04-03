/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import R from 'ramda';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ListView,
  Image,
  Text,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import renderImages from '../fake/fakeImage';

// const images = R.range(1, 11).map(i => require(`../images/image${i}.jpeg`));
const images = R.range(1, 11).map(i => i);
const data = [{
  "id": 1,
  "to_capital": true,
  "date": "25-Feb-2017",
  "time": "5:46 PM",
  "image": images[0]
}, {
  "id": 2,
  "to_capital": true,
  "date": "31-Jan-2017",
  "time": "12:38 PM",
  "image": images[1]
}, {
  "id": 3,
  "to_capital": true,
  "date": "01-Jul-2017",
  "time": "1:33 PM",
  "image": images[2]
}, {
  "id": 4,
  "to_capital": true,
  "date": "19-Feb-2017",
  "time": "3:59 AM",
  "image": images[3]
}, {
  "id": 5,
  "to_capital": true,
  "date": "12-Apr-2017",
  "time": "9:57 AM",
  "image": images[4]
}, {
  "id": 6,
  "to_capital": false,
  "date": "13-Aug-2017",
  "time": "9:37 PM",
  "image": images[5]
}, {
  "id": 7,
  "to_capital": true,
  "date": "17-Dec-2017",
  "time": "4:32 AM",
  "image": images[6]
}, {
  "id": 8,
  "to_capital": false,
  "date": "02-Dec-2017",
  "time": "12:56 AM",
  "image": images[7]
}, {
  "id": 9,
  "to_capital": false,
  "date": "27-Oct-2017",
  "time": "9:02 PM",
  "image": images[8]
}, {
  "id": 10,
  "to_capital": true,
  "date": "13-Sep-2017",
  "time": "6:20 PM",
  "image": images[9]
}]
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Schedule extends Component {
  constructor(props){
    super(props)

    this.state = {
      dataSource: ds.cloneWithRows(data),
    }
  }

  getRouteName(to_capital) {
      if (to_capital) {
          return "Солигорск -> Минск";
      } else {
          return "Минск -> Солигорск";
      }
  }

  eachMessage(x){
    return (
      <TouchableOpacity onPress ={() => {this.props.navigator.push({id:'route', routeName:this.getRouteName(x.to_capital)}) }}>
        <View style={{ alignItems:'center', padding:10, flexDirection:'row', borderBottomWidth:1, borderColor:'#f7f7f7' }}>
          <View>
            <View style={{ flexDirection:'row', justifyContent:'space-between', width: 370 }}>
                <Text style={{ marginLeft:15, fontWeight:'600', color:'#222' }}>{this.getRouteName(x.to_capital)}</Text>
            </View>
            <View style={{ flexDirection:'row', alignItems:'center' }}>
              <Text style={{ fontWeight:'400', color:'#666', fontSize:12, marginLeft:15 }}>{x.date} {x.time}</Text>
            </View>
          </View>
          <Text style={{ fontWeight:'400', color:'#666', fontSize:12 }}> > </Text>
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
