import React, {Fragment} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import FrontpageScreen from './screens/Frontpage';
import LoginEmpresa from './screens/login/LoginEmpresa';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator(
  {
    Home: {screen: FrontpageScreen},
    Login: {screen: LoginEmpresa},
  },
  {
    headerMode: 'none',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#003366',
        opacity: 1,
        zIndex: 1,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

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
