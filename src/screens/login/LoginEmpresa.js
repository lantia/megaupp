import React, {Fragment} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageBackground,
  TextInput,
  ScrollView,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Dimensions} from 'react-native';
import MegaText from '../../components/MegaText';
import MegaTitle from '../../components/MegaTitle';
import AwesomeButton from 'react-native-really-awesome-button';

function LoginEmpresa(props) {
  const {navigate} = props.navigation;

  return (
    <Fragment>
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/images/background.png')}
          style={styles.background}>
          <Image
            source={require('../../assets/images/logoGrande.png')}
            style={styles.logo}
          />
          <MegaTitle style={styles.title}>Ingreso > Empresa</MegaTitle>
          <View style={styles.buttons}>
            <View style={styles.tinputParent} />
            <TextInput
              style={styles.tinput}
              //onChangeText={text => onChangeText(text)}
              //value={value => value}
              placeholder={'C.C.'}
              placeholderTextColor="#cccccc"
            />
          </View>
          <View style={styles.buttons}>
            <AwesomeButton
              width={150}
              backgroundColor={'#FFCC00'}
              backgroundDarker={'#FFCC00'}
              borderRadius={0}
              height={80}
              onPress={() => navigate('Login', {name: 'pipe'})}>
              <MegaText style={styles.text}>Monitor</MegaText>
            </AwesomeButton>
            <AwesomeButton
              progress
              progressLoadingTime={1000}
              springRelease
              onPress={next => setTimeout(next, 1000)}
              width={150}
              height={80}
              backgroundColor={'#FFCC00'}
              backgroundDarker={'#FFCC00'}
              borderRadius={0}>
              <MegaText style={styles.text}>Logística</MegaText>
            </AwesomeButton>
          </View>
          <View style={styles.bottom}>
            <Image
              source={require('../../assets/images/logos_lideres.png')}
              style={styles.logoLideres}
            />
          </View>
        </ImageBackground>
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  background: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  body: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  boton: {
    flex: 1,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttons: {
    marginTop: 15,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: Dimensions.get('window').width,
  },
  ccParent: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 16,
  },
  cc: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
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
    marginBottom: 15,
    marginTop: 28,
  },
  logoLideres: {
    width: Dimensions.get('window').width,
    height: 90,
    backgroundColor: 'white',
    opacity: 0.7,
  },
  tinput: {
    height: 60,
    width: 250,
    borderColor: '#FFCC00',
    backgroundColor: 'transparent',
    borderWidth: 1,
    color: 'black',
    fontSize: 18,
    padding: 10,
    zIndex: 2,
  },
  tinputParent: {
    height: 60,
    width: 250,
    backgroundColor: 'white',
    opacity: 0.5,
    zIndex: 1,
  },
  title: {
    fontSize: 24,
    color: 'white',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003366',
    textAlign: 'center',
  },
  textGrupo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003366',
    textAlign: 'center',
  },
  textParent: {
    marginLeft: '10%',
  },
});

export default LoginEmpresa;