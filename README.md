# react-native-scaling-drawer
React Native SwipeAble Scaling Drawer

## Installation
`npm i react-native-scaling-drawer --save`

![Demo](https://cloud.githubusercontent.com/assets/3721734/23039111/278b754c-f495-11e6-8f59-6a3bd08e11cf.gif)
![Demo](https://cloud.githubusercontent.com/assets/3721734/22906232/4c98dd34-f24c-11e6-931e-66a8c020e35d.gif)

## API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| ``scalingFactor`` | ``number`` | `0.6` | Maximum scaling size (in percantage) of your Front View's scale. Set value higher than `0.1` lower than `1` |
| ``minimizeFactor`` | ``number`` | ``0.7`` | Maximum push offset (in percentage) of your Front View's position relative to left edge of screen. A value of `0.5` means middle of screen if scaling value is  |
| ``content`` | ``element`` | - | Drawer content menu(Left Menu) |
| ``swipeOffset`` | ``number`` | ``10`` | Minimum offset for your Front View to trigger Drawer's Swipe action |
| ``contentWrapperStyle`` | ``object`` | - | Drawer Menu Wrapper custom style |
| ``frontStyle`` | ``object`` | - | Front View custom style |
| ``onOpen`` | ``function`` | - | If u open drawer trigger onOpen function |
| ``onClose`` | ``function`` | - | If u close drawer trigger onClose function |

## NOTE
If you want to disable drawer swipe, you can access blockSwipeAbleDrawer method and send true. (Default value false, you can swipe drawer any screen). You can check my example for block.

## Example With React Navigation

```jsx

import React, {Component} from 'react';
import {View, StatusBar, TouchableOpacity, Text} from 'react-native';
import ScalingDrawer from './ScalingDrawer';
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

```

## TODO
- Add Perspective Animation