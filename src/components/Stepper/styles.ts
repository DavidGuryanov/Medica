import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'space-between',
    position: 'absolute',
    top: '65%',
    left: '35%',
  },
  activeStep: {
    width: 48,
    height: 12,
    borderRadius: 100,
    marginHorizontal: 4,
  },
  idleStep: {
    width: 12,
    height: 12,
    backgroundColor: '#E0E0E0',
    borderRadius: 100,
    marginHorizontal: 6,
  },
});

export default styles;
