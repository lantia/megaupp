import React, {Fragment} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import FrontpageScreen from './screens/Frontpage';
import LoginScreen from './screens/Login';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  Home: {screen: FrontpageScreen},
  Login: {screen: LoginScreen},
});

const MainApp = createAppContainer(MainNavigator);

function App() {
  return (
    <Fragment>
      <SafeAreaView style={styles.container}>
        <MainApp />
      </SafeAreaView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
