import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';
import Icon, {iconVariants} from '../Icon';

type UniversalButtonsProps = {
  onPress: () => void;
  title: string;
  primary?: boolean;
  rounded?: boolean;
  disabled?: boolean;
  dark?: boolean;
  mini?: boolean;
  iconStart?: keyof typeof iconVariants;
  iconEnd?: keyof typeof iconVariants;
  children?: JSX.Element[] | JSX.Element;
  [x: string]: any;
};

function UniversalButtons({
  onPress,
  title,
  primary,
  rounded,
  disabled,
  dark,
  mini,
  iconStart,
  iconEnd,
  children,
  style,
  ...props
}: UniversalButtonsProps): JSX.Element {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        primary ? styles.buttonPrimaryLight : styles.buttonSecondaryLight,
        rounded ? styles.rounded : styles.lessRounded,
        disabled && styles.disabled,
        dark && styles.buttonPrimaryDark,
        mini && styles.miniButton,
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
      {...props}>
      {iconStart && <Icon type={iconStart} style={styles.iconStart} />}
      <Text
        style={[
          styles.text,
          !primary && styles.secondaryText,
          dark && styles.text,
        ]}>
        {title}
      </Text>
      {children}
      {iconEnd && <Icon type={iconEnd} style={styles.iconEnd} />}
    </TouchableOpacity>
  );
}

export default UniversalButtons;
