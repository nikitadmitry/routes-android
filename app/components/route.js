/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import InvertibleScrollView from 'react-native-invertible-scroll-view';
import {
  AppRegistry,
  StyleSheet,
  ListView,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Image,
  Text,
  View
} from 'react-native';

import renderImages from '../fake/fakeImage';

const { width, height } = Dimensions.get('window');
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Route extends Component {

    timeout;
    convo;

  constructor(props){
      super(props)

      this.convo = [
          {"note": "Федор Дмитриев приобрел место."},
          {"note": "Анна Лобач приобрела место."},
          {"note": "Стапаан Иванов отменил место."},
          {"note": "Геннадий Горин приобрел место."}]

    this.state = {
      datasource: ds.cloneWithRows(this.convo)
    }
  }

  eachMessage(x){
      return (
          <View style={{ flexDirection:'row', alignItems:'flex-end', margin:5 }}>
              <View style={{ width:400, borderRadius:10, backgroundColor:'#f4f4f4', padding:10 }}>
                  <Text style={{ fontSize:18, color:'#555', fontWeight:'600' }}>{x.note}</Text>
              </View>
          </View>
      )
  }

  similator(){
      this.timeout = setTimeout(() => {
          this.convo.reverse();
          this.convo.push({note:"Анна Губич приобрела место."})
        this.setState({
            datasource: ds.cloneWithRows(this.convo.reverse())
        })
    }, 2000);
  }

  componentDidMount() {
      this.similator();
  }

  componentWillUnmount() {
      clearTimeout(this.timeout);
  }

  render() {
    return (
      <Image source={require('../images/background.jpg')} style={styles.container}>
        <View style={{ height:65, flexDirection:'row', justifyContent:'space-between', backgroundColor:'#075e54', alignItems:'center', paddingTop:10 }}>
          <View style={{ flexDirection:'row', flex:1, alignItems:'center' }}>
            <TouchableOpacity onPress={() => this.props.navigator.pop()}>
              <Icon name="navigate-before" color='#fff' size={23} style={{ }} />
            </TouchableOpacity>
            <Text style={{ color:'#fff', fontWeight:'600', margin:10, fontSize:15 }}>{this.props.routeName}</Text>
          </View>
        </View>
      <ListView
        enableEmptySections={true}
        renderScrollComponent={props => <InvertibleScrollView {...props} inverted />}
        noScroll={true}
        style={{ flex:1, }}
        contentContainerStyle={{ justifyContent:'flex-end' }}
        dataSource={this.state.datasource}
        renderRow={(rowData) => this.eachMessage(rowData)}
      />
    </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:null,
    height:null,
    justifyContent:'space-between',
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }, row:{
    flexDirection:'row'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
