import React, {Component} from 'react';
import {View, StatusBar, TouchableOpacity, Text} from 'react-native';
import ScalingDrawer from 'react-native-scaling-drawer';
import Home from './container/Home';
import Profile from './container/Profile';
import Wins from './container/Wins';
import Detail from './container/Detail';
import LeftMenu from './component/LeftMenu';
import {
  createNavigator,
  createNavigationContainer,
  StackRouter,
  addNavigationHelpers,
} from 'react-navigation';

let defaultScalingDrawerConfig = {
  scalingFactor: 0.6,
  minimizeFactor: 0.6,
  swipeOffset: 20
};

class CustomDrawerView extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    /** Active Drawer Swipe **/
    if (nextProps.navigation.state.index === 0)
      this._drawer.blockSwipeAbleDrawer(false);

    if (nextProps.navigation.state.index === 0 && this.props.navigation.state.index === 0) {
      this._drawer.blockSwipeAbleDrawer(false);
      this._drawer.close();
    }

    /** Block Drawer Swipe **/
    if (nextProps.navigation.state.index > 0) {
      this._drawer.blockSwipeAbleDrawer(true);
    }
  }

  setDynamicDrawerValue = (type, value) => {
    defaultScalingDrawerConfig[type] = value;
    /** forceUpdate show drawer dynamic scaling example **/
    this.forceUpdate();
  };

  render() {
    const {routes, index} = this.props.navigation.state;
    const ActiveScreen = this.props.router.getComponentForState(this.props.navigation.state);

    return (
      <ScalingDrawer
        ref={ref => this._drawer = ref}
        content={<LeftMenu navigation={this.props.navigation}/>}
        {...defaultScalingDrawerConfig}
        onClose={() => console.log('close')}
        onOpen={() => console.log('open')}
      >
        <ActiveScreen
          navigation={addNavigationHelpers({
            ...this.props.navigation,
            state: routes[index],
            openDrawer: () => this._drawer.open(),
          })}
          dynamicDrawerValue={ (type, val) => this.setDynamicDrawerValue(type, val) }
        />
      </ScalingDrawer>
    )
  }
}

const AppNavigator = StackRouter({
  Home: {screen: Home},
  Profile: {screen: Profile},
  Wins: {screen: Wins},
  Detail: {
    screen: Detail,
    path: 'detail'
  }
}, {
  initialRouteName: 'Home',
});

const CustomDrawer = createNavigationContainer(createNavigator(AppNavigator)(CustomDrawerView));

export default CustomDrawer;
