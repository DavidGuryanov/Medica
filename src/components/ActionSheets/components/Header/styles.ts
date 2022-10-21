import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    zIndex: 0,
    height: 88,
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  indicator: {
    height: 3,
    width: 38,
    borderRadius: 100,
  },
  separator: {
    height: 2,
    width: '100%',
  },
});

export default styles;
