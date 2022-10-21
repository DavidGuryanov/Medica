import React, {useContext} from 'react';
import {ThemeContext} from '../../../../../App';
import {Text, View} from 'react-native';
import styles from './styles';

const DrawerHeader = ({title}: {title: string}) => {
  const theme = useContext(ThemeContext);
  return (
    <View style={[theme.colorScheme.itemCard, styles.headerContainer]}>
      <View style={[styles.indicator, theme.colorScheme.separator]} />
      <Text style={[theme.text.h4, theme.colorScheme.logoTextColor]}>
        {title}
      </Text>
      <View style={[styles.separator, theme.colorScheme.separator]} />
    </View>
  );
};

export default DrawerHeader;
