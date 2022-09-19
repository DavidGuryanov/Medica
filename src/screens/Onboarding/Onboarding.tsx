import React, {useEffect} from 'react';
import {StyleSheet, Text, View, useColorScheme} from 'react-native';
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
  loaderContainer: {
    position: 'absolute',
    bottom: '15%',
    width: '100%',
  },
});

const themes = {
  dark: {
    color: '#ffffff',
    backgroundColor: '#181A20',
  },
  light: {
    color: '#212121',
    backgroundColor: '#fff',
  },
};

const Onboarding = () => {
  const [LoaderComp, setLoader] = useLoader();
  const colorScheme = useColorScheme() || 'light';
  useEffect(() => {
    setLoader(true);
    setTimeout(() => setLoader(false), 5000);
  }, [setLoader]);

  return (
    <View style={{...styles.container, ...themes[colorScheme]}}>
      <View style={styles.logoContainer}>
        <Logo width={60} height={60} />
        <Text style={{...styles.text, ...themes[colorScheme]}}>Medica</Text>
      </View>
      <View style={styles.loaderContainer}>{LoaderComp}</View>
    </View>
  );
};

export default Onboarding;
