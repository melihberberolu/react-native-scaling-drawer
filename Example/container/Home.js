import React, {
  Component,
} from 'react';
import {View, TouchableOpacity, ScrollView, StyleSheet, Text, Slider} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import styles from '../AppStyles';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scalingFactor: 0.1,
      minimizeFactor: 0.1,
    }
  }

  setValue(type, value) {
    this.setState({[type]: value});
    this.props.dynamicDrawerValue(type, value)
  }

  render() {
    return (
      <View style={[styles.container, {backgroundColor: "#d6efff"}]}>
        <Icon name={"navicon"}
              style={styles.bar}
              onPress={() => this.props.navigation.openDrawer()}
        />

        <ScrollView style={styles.sView} contentContainerStyle={styles.subContainer}>

          <Text style={styles.title}>React Native Scaling Drawer</Text>
          <Text style={[styles.title, styles.mb20]}>Example With React Navigation</Text>
          <Text style={[styles.title, styles.mb20]}>HOME</Text>

          <View style={styles.sliderGroup}>
            <View style={styles.slider}>
              <View style={styles.txtGroup}>
                <Text style={styles.txt}>Scaling Factor Slider</Text>
                <Text style={styles.valTxt}>{this.state.scalingFactor.toFixed(2)}</Text>
              </View>
              <Slider
                style={{width: 250, height: 50}}
                maximumValue={0.9}
                minimumValue={0.1}
                onValueChange={(value) => this.setValue('scalingFactor', value)}/>
            </View>
          </View>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail', {blockDrawer: true})}>
            <Text>GO DETAIL PAGE</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

export default Home;
