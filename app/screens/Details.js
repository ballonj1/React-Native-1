import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Details extends Component {
  render() {
    return (
      <View
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}
      >
        <Text>{this.props.navigation.state.params.name.first}</Text>
      </View>
    )
  }
}

export default Details;
