import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 49,
    borderTopRightRadius: 49,
    backgroundColor: 'transparent',
  },
  contentWrapper: {
    paddingHorizontal: 16,
    maxHeight: '100%',
    height: 300,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'red',
    paddingBottom: 30,
    justifyContent: 'space-evenly',
  },
});
export default styles;
