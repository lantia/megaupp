import React, {Fragment} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Dimensions} from 'react-native';
import MegaText from '../components/MegaText';
import MegaTitle from '../components/MegaTitle';
import AwesomeButton from 'react-native-really-awesome-button';

function Frontpage() {
  return (
    <Fragment>
      <View style={styles.container}>
        <Image
          source={require('../assets/images/logoGrande.png')}
          style={styles.logo}
        />
        <MegaTitle style={styles.title}>Login</MegaTitle>
        <View style={styles.buttons}>
          <AwesomeButton
            width={230}
            backgroundColor={'#FFCC00'}
            backgroundDarker={'#FFCC00'}
            borderRadius={0}>
            <MegaText style={styles.text}>Empresa</MegaText>
          </AwesomeButton>
        </View>
        <View style={styles.buttons}>
          <AwesomeButton
            progress
            progressLoadingTime={1000}
            springRelease
            onPress={next => setTimeout(next, 1000)}
            width={230}
            backgroundColor={'#FFCC00'}
            backgroundDarker={'#FFCC00'}
            borderRadius={0}>
            <MegaText style={styles.text}>Grupo de investigación </MegaText>
          </AwesomeButton>
        </View>
        <View style={styles.bottom}>
          <Image
            source={require('../assets/images/logos_lideres.png')}
            style={styles.logoLideres}
          />
        </View>
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttons: {
    marginTop: 30,
  },
  container: {
    backgroundColor: '#003366',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  gradient: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  logo: {
    width: 280,
    height: 240,
    marginTop: 40,
    marginBottom: 28,
  },
  logoLideres: {
    width: 350,
    height: 80,
    backgroundColor: '#5c7396',
  },
  title: {
    fontSize: 30,
    color: 'white',
    marginBottom: 30,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003366',
  },
});

export default Frontpage;
