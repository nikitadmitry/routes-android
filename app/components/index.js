import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Navigator,
  View
} from 'react-native';

import Home from './threeTabs'
import Route from './route'

export default class Index extends Component {
  constructor(props){
    super(props)
  }

  renderScene(route, navigator) {
    const {state,actions} = this.props;
    const routeId = route.id;

    if (routeId === 'home') {
      return (
        <Home
          {...this.props}
          navigator={navigator}
        />
      );
    }

    if (routeId === 'route') {
      return (
        <Route
          {...this.props}
          image={route.image}
          name={route.name}
          navigator={navigator} />
      );
    }
  }

  render() {
    return (
      <View style={{ flex:1 }}>
        <Navigator
          style={{ flex:1 }}
          ref={'NAV'}
          initialRoute={{ id: 'home', name: 'home' }}
          renderScene={this.renderScene.bind(this)}
        />
      </View>
    )
  }
}
