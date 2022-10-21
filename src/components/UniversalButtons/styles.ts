import {StyleSheet} from 'react-native';

const shadowProp = {
  shadowColor: 'rgba(36,107,253,0.87)',
  shadowOffset: {
    width: 4,
    height: 8,
  },
  shadowOpacity: 1,
  shadowRadius: 5,
  elevation: 19,
};

export const styles = StyleSheet.create({
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 58,
    width: '100%',
  },
  miniButton: {
    width: '45%',
  },
  iconStart: {
    marginRight: '2.5%',
  },
  iconEnd: {
    marginLeft: '2.5%',
  },
  buttonPrimaryLight: {
    backgroundColor: '#246BFD',
    ...shadowProp,
  },
  buttonSecondaryLight: {backgroundColor: '#E9F0FF'},
  buttonPrimaryDark: {
    backgroundColor: '#35383F',
  },
  buttonSecondaryDark: {backgroundColor: '#E9F0FF'},
  rounded: {borderRadius: 100},
  lessRounded: {borderRadius: 16},
  disabled: {opacity: 0.35},
  text: {
    fontFamily: 'Urbanist',
    fontWeight: '700',
    fontSize: 16,
    color: 'white',
  },
  secondaryText: {
    color: '#246BFD',
  },
});
