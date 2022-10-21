import React, {useRef} from 'react';
import DocCard from '../../../DocCard';
import {StyleSheet, useColorScheme, View} from 'react-native';
import UniversalButtons from '../../../UniversalButtons';
import DefaultSheet from '../DefaultSheet/DefaultSheet';

interface ISheetProps {
  sheetId: string;
  payload: any;
}

const RemoveFavorites = ({...props}: ISheetProps) => {
  const colorScheme = useColorScheme() || 'light';
  const actionSheetRef = useRef(null);
  return (
    <DefaultSheet
      {...props}
      actionSheetRef={actionSheetRef}
      title="Remove from Favorites?">
      <DocCard />
      <View style={styles.controlsWrapper}>
        <UniversalButtons
          onPress={() => {}}
          title="Cancel"
          rounded
          mini
          dark={colorScheme === 'dark'}
        />
        <UniversalButtons
          onPress={() => {}}
          title="Yes, Remove"
          primary
          rounded
          mini
        />
      </View>
    </DefaultSheet>
  );
};

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
  controlsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default RemoveFavorites;
