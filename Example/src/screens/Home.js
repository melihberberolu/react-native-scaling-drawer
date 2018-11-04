import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

import { drawer } from "../AppNavigation";

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => drawer.current.open()}>
          <Text>OPEN DRAWER</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
