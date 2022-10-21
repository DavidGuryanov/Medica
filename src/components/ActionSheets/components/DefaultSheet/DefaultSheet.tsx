import React, {useContext} from 'react';
import {View} from 'react-native';
import styles from './styles';
import ActionSheet, {ActionSheetRef} from 'react-native-actions-sheet';
import {ThemeContext} from '../../../../../App';
import DrawerHeader from '../Header';

interface ISheetProps {
  sheetId: string;
  payload: any;
  children: React.ReactElement | React.ReactElement[];
  actionSheetRef: React.Ref<ActionSheetRef> | undefined;
  title: string;
}

const DefaultSheet = ({
  sheetId,
  payload,
  children,
  actionSheetRef,
  title,
}: ISheetProps) => {
  // const scrollHandlers = useScrollHandlers<ScrollView>('1', actionSheetRef);
  const theme = useContext(ThemeContext);

  return (
    <ActionSheet
      id={sheetId}
      ref={actionSheetRef}
      onBeforeShow={() => {
        console.log('sheet payload', payload?.data);
      }}
      isModal={false}
      snapPoints={[100, 200]}
      initialSnapIndex={0}
      statusBarTranslucent
      drawUnderStatusBar={true}
      gestureEnabled={true}
      openAnimationConfig={{
        bounciness: 4,
      }}
      overdrawSize={10}
      containerStyle={styles.container}
      CustomHeaderComponent={<DrawerHeader title={title} />}
      useBottomSafeAreaPadding
      defaultOverlayOpacity={0.5}>
      <View style={[styles.contentWrapper, theme.colorScheme.itemCard]}>
        {children}
      </View>
    </ActionSheet>
  );
};

export default DefaultSheet;
