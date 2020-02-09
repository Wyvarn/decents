/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {Component} from 'react';
import {
  BackHandler,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';
import colors from "@colors"

const STATUSBAR_CONFIG = {
  backgroundColor: colors.statusBar,
  barStyle: 'light-content',
  translucent: false
};

type Props = {
  navigation: {
    state: {
      index: number,
      routes: Array<object>
    },
    goBack: () => {}
  }
}

export default class Application extends Component<Props> {
  componentDidMount(): void {
    BackHandler.addEventListener("hardwareBackPress", () => this.handleBackButton())
  }

  componentWillUnmount(): void {
    BackHandler.removeEventListener("hardwareBackPress", () => {});
  }

  /**
   * Handles back button navigation
   */
  handleBackButton = () => {
    if (!this.props.navigation) {
      return false;
    }

    const { state, goBack } = this.props.navigation;

    if (state.routes.length > 1 && state.index > 0) {
      goBack();
      return true;
    }
    return false
  };

  render() {
    return (
        <View style={styles.container}>
          <StatusBar {...STATUSBAR_CONFIG} />
          <Router />
        </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.defaultBackground,
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center'
  }
});