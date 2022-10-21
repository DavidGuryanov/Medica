import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Basket from '../../assets/busket.svg';
import Arrow from '../../assets/arrow.svg';
import Play from '../../assets/play.svg';
import Message from '../../assets/message.svg';
import Phone from '../../assets/phone.svg';
import Video from '../../assets/video.svg';
import BasketSecondary from '../../assets/busketSecondary.svg';
import ArrowSecondary from '../../assets/arrowSecondary.svg';
import {styles} from './styles';

type UniversalButtonsProps = {
  onPress: () => void;
  title: string;
  primary?: boolean;
  rounded?: boolean;
  disabled?: boolean;
  dark?: boolean;
  mini?: boolean;
  iconStart?: keyof typeof icons;
  iconEnd?: keyof typeof icons;
  children?: JSX.Element[] | JSX.Element;
};

const icons = {
  basket: Basket,
  arrow: Arrow,
  play: Play,
  message: Message,
  phone: Phone,
  video: Video,
  basketSecondary: BasketSecondary,
  arrowSecondary: ArrowSecondary,
} as const;

interface TIconProps {
  type: keyof typeof icons;
  [x: string]: any;
}

const Icon = ({type, ...props}: TIconProps): JSX.Element => {
  const IconComponent = icons[type];
  return <IconComponent {...props} />;
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
