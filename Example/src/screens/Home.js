import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class Home extends Component {
  render() {
    return <View style={styles.container} />;
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  }
});
