import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class Profile extends Component {
  render() {
    return <View style={styles.container} />;
  }
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow'
  }
});
