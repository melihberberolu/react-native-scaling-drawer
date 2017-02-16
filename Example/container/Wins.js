import React, {
  Component,
} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import styles from '../AppStyles';
class Wins extends Component {
  render() {
    return (
      <View style={[styles.container, {backgroundColor: "#f78c8c"}]}>
        <Icon name={"navicon"}
              style={styles.bar}
              onPress={() => this.props.navigation.openDrawer()}
        />
        <Text style={styles.title}>React Native Scaling Drawer</Text>
        <Text style={[styles.title, styles.mb50]}>Example With React Navigation</Text>
        <Text style={styles.title}>WINS</Text>
      </View>
    );
  }
}
export default Wins;