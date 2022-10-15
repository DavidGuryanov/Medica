import React, {useEffect, useState} from 'react';
import {Text, View, useColorScheme, Image} from 'react-native';
import styles from './styles';
import Logo from '../../assets/logo.svg';
import {useLoader} from '../../components/Loader/Loader';
import Slides from './components/Slides';

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
  // const colorScheme = 'light';
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      setStep(STEPS.welcome);
      setTimeout(() => {
        // setLoader(false);
        setStep(STEPS.slides);
      }, 2500);
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
    [STEPS.slides]: <Slides />,
  };

  return (
    <View style={{...styles.container, ...themes[step][colorScheme]}}>
      {getStepComponent[step]}
    </View>
  );
};

export default Onboarding;
