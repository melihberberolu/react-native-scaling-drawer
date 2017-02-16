import React, {
  Component,
} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import styles from '../AppStyles';
class Profile extends Component {
  render() {
    return (
      <View style={[styles.container, {backgroundColor: "#a6fcf1"}]}>
        <Icon name={"navicon"}
              style={styles.bar}
              onPress={() => this.props.navigation.openDrawer()}
        />
        <Text style={styles.title}>React Native Scaling Drawer</Text>
        <Text style={[styles.title, styles.mb50]}>Example With React Navigation</Text>
        <Text style={styles.title}>PROFILE</Text>
      </View>
    );
  }
}

export default Profile;