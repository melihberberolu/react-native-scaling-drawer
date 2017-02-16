import React, {
  Component,
} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import styles from '../AppStyles';
class Home extends Component {
  render() {
    return (
      <View style={[styles.container, {backgroundColor: "#d6efff"}]}>
        <Icon name={"arrow-left"}
              style={styles.bar}
              onPress={() => this.props.navigation.goBack()}
        />
        <Text style={styles.title}>React Native Scaling Drawer</Text>
        <Text style={[styles.title, styles.mb50]}>Example With React Navigation</Text>
        <Text style={styles.title}>EXAMPLE DRAWER BLOCK SWIPE</Text>
      </View>
    );
  }
}

export default Home;