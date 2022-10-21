import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 24,
    backgroundColor: 'grey',
    padding: 16,
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    borderStyle: 'solid',
    marginLeft: 16,
    flexGrow: 1,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 14,
    borderStyle: 'solid',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  ratings: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  ratingsText: {
    marginLeft: 10,
  },
});

export default styles;
