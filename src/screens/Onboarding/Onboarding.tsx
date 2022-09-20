import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, useColorScheme, Image} from 'react-native';
import Logo from '../../assets/logo.svg';
import {useLoader} from '../../components/Loader/Loader';

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    height: '90%',
  },
  text: {
    fontWeight: '700',
    fontSize: 48,
    fontFamily: 'Urbanist',
    color: 'red',
    marginLeft: 16,
  },
  subText: {
    fontFamily: 'Urbanist',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 18,
    color: '#212121',
    marginHorizontal: 20,
    textAlign: 'center',
  },
  loaderContainer: {
    position: 'absolute',
    bottom: '15%',
    width: '100%',
  },
  welcomeImage: {
    width: '130%',
    marginHorizontal: '-15%',
    resizeMode: 'contain',
    height: 430,
    flexGrow: 1,
    maxHeight: '57%',
  },
  welcomeContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '95%',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexGrow: 2,
  },
});

enum STEPS {
  loading = 0,
  welcome = 1,
  slides = 2,
}

const themes = {
  [STEPS.loading]: {
    dark: {
      color: '#ffffff',
      backgroundColor: '#181A20',
    },
    light: {
      color: '#212121',
      backgroundColor: '#fff',
    },
  },
  [STEPS.welcome]: {
    dark: {
      color: '#ffffff',
      backgroundColor: '#181A20',
      marginLeft: 0,
    },
    light: {
      color: '#246BFD',
      backgroundColor: '#fff',
      marginLeft: 0,
    },
  },
  [STEPS.slides]: {
    dark: {
      color: '#ffffff',
      backgroundColor: '#181A20',
    },
    light: {
      color: '#246BFD',
      backgroundColor: '#fff',
    },
  },
};

const Onboarding = () => {
  const [LoaderComp, setLoader] = useLoader();
  const [step, setStep] = useState(STEPS.loading);
  const colorScheme = useColorScheme() || 'light';
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      setStep(STEPS.welcome);
    }, 2500);
  }, [setLoader]);

  const getStepComponent = {
    [STEPS.loading]: (
      <>
        <View style={styles.logoContainer}>
          <Logo width={60} height={60} />
          <Text style={{...styles.text, ...themes[step][colorScheme]}}>
            Medica
          </Text>
        </View>
        <View style={styles.loaderContainer}>{LoaderComp}</View>
      </>
    ),
    [STEPS.welcome]: (
      <View style={styles.welcomeContainer}>
        <Image
          source={require('../../assets/welcome.png')}
          style={styles.welcomeImage}
        />
        <View style={styles.textContainer}>
          <Text
            style={{
              ...styles.text,
              ...themes[step][colorScheme],
            }}>
            Welcome to Medica! 👋
          </Text>
          <Text
            style={{
              ...styles.subText,
              ...themes[step][colorScheme],
            }}>
            The best online doctor appointment & consultation app of the century
            for your health and medical needs!
          </Text>
        </View>
      </View>
    ),
    [STEPS.slides]: <Text>Slides</Text>,
  };

  return (
    <View style={{...styles.container, ...themes[step][colorScheme]}}>
      {getStepComponent[step]}
    </View>
  );
};

export default Onboarding;
