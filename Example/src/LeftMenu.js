import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import NavigationService from './NavigationService';

class LeftMenu extends Component {

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.btn} onPress={() => {
          NavigationService.navigate('Home');
          this.props.drawer.current.close();
        }}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => {
          NavigationService.navigate('Profile');
          this.props.drawer.current.close();
        }}>
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default LeftMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    paddingTop: 100,
  },
  btn: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
