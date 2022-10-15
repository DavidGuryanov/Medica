import {StyleSheet} from 'react-native';

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

export default styles;
