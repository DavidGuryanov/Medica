import React, {useContext, useEffect, useState} from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';
import Logo from '../../assets/logo.svg';
import {useLoader} from '../../components/Loader/Loader';
import Slides from './components/Slides';
import {ThemeContext} from '../../../App';

enum STEPS {
  loading = 0,
  welcome = 1,
  slides = 2,
}

const Onboarding = () => {
  const [LoaderComp, setLoader] = useLoader();
  const [step, setStep] = useState(STEPS.slides);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      setStep(STEPS.welcome);
      setTimeout(() => {
        setStep(STEPS.slides);
      }, 2500);
    }, 2500);
  }, [setLoader]);

  const getStepComponent = {
    [STEPS.loading]: (
      <>
        <View style={styles.logoContainer}>
          <Logo width={60} height={60} style={styles.logo} />
          <Text
            style={{
              ...theme.text.h1,
              color: theme.colorScheme.logoTextColor,
            }}>
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
              ...theme.colors,
              ...theme.text.h1,
            }}>
            Welcome to Medica! 👋
          </Text>
          <Text
            style={{
              ...styles.subText,
              ...theme.text.p,
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
    <View style={{...styles.container, ...theme.colors}}>
      {getStepComponent[step]}
    </View>
  );
};

export default Onboarding;
