import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    paddingBottom: 48,
    paddingHorizontal: 24,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  picture: {
    height: '50%',
    flexGrow: 0,
  },
  textWrapper: {
    flexGrow: 3,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  slidesText: {
    fontFamily: 'Urbanist',
    fontWeight: '700',
    fontSize: 40,
    textAlign: 'center',
    color: '#246BFD',
    // height: '45%',
  },
  tempButton: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#246BFD',
    paddingVertical: 18,
    borderRadius: 100,
  },
  tempButtonText: {
    fontFamily: 'Urbanist',
    fontWeight: '700',
    fontSize: 16,
    color: '#fff',
  },
  pic: {
    width: 20,
    height: '20%',
    backgroundColor: 'red',
  },
});

export default styles;
