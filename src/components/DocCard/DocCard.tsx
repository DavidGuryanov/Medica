import React, {useContext} from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import {ThemeContext} from '../../../App';
import Heart from '../../assets/heart_blue.svg';
import Star from '../../assets/star.svg';

const DocCard = () => {
  const theme = useContext(ThemeContext);
  return (
    <View style={[styles.cardContainer, theme.colors]}>
      <Image source={require('../../assets/images/doc1.png')} />
      <View style={styles.textContainer}>
        <View style={styles.headerContainer}>
          <Text style={[theme.text.h6, theme.colorScheme.logoTextColor]}>
            Dr. Travis Westaby
          </Text>
          <Heart />
        </View>
        <Text style={[theme.text.p_M.medium, theme.colorScheme.logoTextColor]}>
          Cardiologists | Alka Hospital
        </Text>
        <View style={styles.ratings}>
          <Star />
          <Text
            style={[
              theme.text.p_M.medium,
              theme.colorScheme.logoTextColor,
              styles.ratingsText,
            ]}>
            4.3
          </Text>
          <Text
            style={[
              theme.text.p_M.medium,
              theme.colorScheme.logoTextColor,
              styles.ratingsText,
            ]}>
            (5,376 reviews)
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DocCard;
