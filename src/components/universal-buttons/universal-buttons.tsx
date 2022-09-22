import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';
import Busket from '../../assets/busket.svg';
import Arrow from '../../assets/arrow.svg';
import Play from '../../assets/play.svg';
import Message from '../../assets/message.svg';
import Phone from '../../assets/phone.svg';
import Video from '../../assets/video.svg';
import BusketSecondary from '../../assets/busketSecondary.svg';
import ArrowSecondary from '../../assets/arrowSecondary.svg';

const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: '#CCF',
    shadowOffset: {width: 4, height: 8},
    shadowOpacity: 0.25,
    shadowRadius: 24,
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 58,
    width: 380,
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 48,
    top: 280, // временно
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 18,
    paddingBottom: 18,
  },
  miniButton: {
    width: 184,
  },
  popupButton: {
    width: 276,
  },
  svgBusket: {
    position: 'absolute',
    width: 16.67,
    height: 16.67,
    left: 130.67,
    top: 20.67,
    bottom: 20.67,
    right: 232.67,
  },
  svgArrow: {
    position: 'absolute',
    width: 15,
    height: 10,
    left: 233.5,
    top: 24,
    bottom: 24,
    right: 131.5,
  },
  svgPlay: {
    position: 'absolute',
    width: 16.67,
    height: 16.67,
    left: 90.17,
    top: 20.67,
    bottom: 20.67,
    right: 273.17,
  },
  svgMessage: {
    position: 'absolute',
    width: 16.67,
    height: 16.67,
    left: 67.67,
    top: 20.67,
    bottom: 20.67,
    right: 295.67,
  },
  svgPhone: {
    position: 'absolute',
    width: 15.83,
    height: 15.83,
    left: 64.08,
    top: 21.08,
    bottom: 21.08,
    right: 300.08,
  },
  svgVideo: {
    position: 'absolute',
    width: 16.67,
    height: 12.5,
    left: 60.67,
    top: 22.75,
    bottom: 22.75,
    right: 302.67,
  },
  buttonPrimaryRounded: {
    backgroundColor: '#246BFD',
    borderRadius: 100,
  },
  buttonSecondaryRounded: {
    backgroundColor: '#E9F0FF',
    borderRadius: 100,
  },
  buttonDisabledRounded: {
    backgroundColor: '#3062C8',
    borderRadius: 100,
  },
  buttonPrimaryFilled: {
    backgroundColor: '#246BFD',
    borderRadius: 16,
  },
  buttonSecondaryFilled: {
    backgroundColor: '#E9F0FF',
    borderRadius: 16,
  },
  buttonDisabledFilled: {
    backgroundColor: '#3062C8',
    borderRadius: 16,
  },
  buttonDarkThemeRounded: {
    backgroundColor: '#35383F',
    borderRadius: 100,
  },
  buttonDarkThemeFilled: {
    backgroundColor: '#35383F',
    borderRadius: 16,
  },
  text: {
    font: 'Urbanist',
    weight: 700,
    size: 16,
    lineHeight: 22.4,
    letter: 0.2,
    alignItems: 'center',
    color: 'white',
  },
  secondaryText: {
    color: '#246BFD',
  },
});

type UniversalButtonsProps = {
  onPress: () => void;
  title: string;
};

// Круглые кнопки

export const PrimaryRoundedButton = ({
  onPress,
  title,
}: UniversalButtonsProps) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.button, styles.buttonPrimaryRounded]}
        onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const SecondaryRoundedButton = ({
  onPress,
  title,
}: UniversalButtonsProps) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.button, styles.buttonSecondaryRounded]}
        onPress={onPress}>
        <Text style={[styles.text, styles.secondaryText]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const DisabledRoundedButton = ({
  onPress,
  title,
}: UniversalButtonsProps) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.button, styles.buttonSecondaryRounded]}
        onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

// Квадратные кнопки

export const PrimaryFilledButton = ({
  onPress,
  title,
}: UniversalButtonsProps) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.button, styles.buttonPrimaryFilled]}
        onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const SecondaryFilledButton = ({
  onPress,
  title,
}: UniversalButtonsProps) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.button, styles.buttonSecondaryFilled]}
        onPress={onPress}>
        <Text style={[styles.text, styles.secondaryText]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const DisabledFilledButton = ({
  onPress,
  title,
}: UniversalButtonsProps) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.button, styles.buttonDisabledFilled]}
        onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

// Темные кнопки

export const DarkThemeRoundedButton = ({
  onPress,
  title,
}: UniversalButtonsProps) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.button, styles.buttonDarkThemeRounded]}
        onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const DarkThemeFilledButton = ({
  onPress,
  title,
}: UniversalButtonsProps) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.button, styles.buttonDarkThemeFilled]}
        onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

// Маленькие кнопки

export const MiniPrimaryRoundedButton = ({
  onPress,
  title,
}: UniversalButtonsProps) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.button, styles.buttonPrimaryRounded, styles.miniButton]}
        onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const MiniSecondaryRoundedButton = ({
  onPress,
  title,
}: UniversalButtonsProps) => {
  return (
    <View>
      <TouchableOpacity
        style={[
          styles.button,
          styles.buttonSecondaryRounded,
          styles.miniButton,
        ]}
        onPress={onPress}>
        <Text style={[styles.text, styles.secondaryText]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const MiniDisabledRoundedButton = ({
  onPress,
  title,
}: UniversalButtonsProps) => {
  return (
    <View>
      <TouchableOpacity
        style={[
          styles.button,
          styles.buttonSecondaryRounded,
          styles.miniButton,
        ]}
        onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const MiniPrimaryFilledButton = ({
  onPress,
  title,
}: UniversalButtonsProps) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.button, styles.buttonPrimaryFilled, styles.miniButton]}
        onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const MiniSecondaryFilledButton = ({
  onPress,
  title,
}: UniversalButtonsProps) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.button, styles.buttonSecondaryFilled, styles.miniButton]}
        onPress={onPress}>
        <Text style={[styles.text, styles.secondaryText]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const MiniDisabledFilledButton = ({
  onPress,
  title,
}: UniversalButtonsProps) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.button, styles.buttonDisabledFilled, styles.miniButton]}
        onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const MiniDarkThemeRoundedButton = ({
  onPress,
  title,
}: UniversalButtonsProps) => {
  return (
    <View>
      <TouchableOpacity
        style={[
          styles.button,
          styles.buttonDarkThemeRounded,
          styles.miniButton,
        ]}
        onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const MiniDarkThemeFilledButton = ({
  onPress,
  title,
}: UniversalButtonsProps) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.button, styles.buttonDarkThemeFilled, styles.miniButton]}
        onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

// Кнопки для попапа

export const PopupPrimaryRoundedButton = ({
  onPress,
  title,
}: UniversalButtonsProps) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.button, styles.buttonPrimaryRounded, styles.popupButton]}
        onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const PopupSecondaryRoundedButton = ({
  onPress,
  title,
}: UniversalButtonsProps) => {
  return (
    <View>
      <TouchableOpacity
        style={[
          styles.button,
          styles.buttonSecondaryRounded,
          styles.popupButton,
        ]}
        onPress={onPress}>
        <Text style={[styles.text, styles.secondaryText]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const PopupDarkThemeRoundedButton = ({
  onPress,
  title,
}: UniversalButtonsProps) => {
  return (
    <View>
      <TouchableOpacity
        style={[
          styles.button,
          styles.buttonDarkThemeRounded,
          styles.popupButton,
        ]}
        onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

// Кнопки с иконками предназначений

export const PrimaryRoundedButtonPlay = ({onPress}: UniversalButtonsProps) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.button, styles.buttonPrimaryRounded]}
        onPress={onPress}>
        <Play style={styles.svgPlay} />
        <Text style={styles.text}>Play Audio Recordings</Text>
      </TouchableOpacity>
    </View>
  );
};

export const PrimaryRoundedButtonMessage = ({
  onPress,
}: UniversalButtonsProps) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.button, styles.buttonPrimaryRounded]}
        onPress={onPress}>
        <Message style={styles.svgMessage} />
        <Text style={styles.text}>Message (Start at 16:00 PM)</Text>
      </TouchableOpacity>
    </View>
  );
};

export const PrimaryRoundedButtonPhone = ({onPress}: UniversalButtonsProps) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.button, styles.buttonPrimaryRounded]}
        onPress={onPress}>
        <Phone style={styles.svgPhone} />
        <Text style={styles.text}>Voice Call (Start at 14:00 PM)</Text>
      </TouchableOpacity>
    </View>
  );
};

export const PrimaryRoundedButtonVideo = ({onPress}: UniversalButtonsProps) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.button, styles.buttonPrimaryRounded]}
        onPress={onPress}>
        <Video style={styles.svgVideo} />
        <Text style={styles.text}>Video Call (Start at 10:00 AM)</Text>
      </TouchableOpacity>
    </View>
  );
};

// Этих кнопок в основном макете не нашел, но они есть в Design System

export const PrimaryRoundedButtonBusketArrow = ({
  onPress,
  title,
}: UniversalButtonsProps) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.button, styles.buttonPrimaryRounded]}
        onPress={onPress}>
        <Busket style={styles.svgBusket} />
        <Text style={styles.text}>{title}</Text>
        <Arrow style={styles.svgArrow} />
      </TouchableOpacity>
    </View>
  );
};

export const SecondaryRoundedButtonBusketArrow = ({
  onPress,
  title,
}: UniversalButtonsProps) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.button, styles.buttonSecondaryRounded]}
        onPress={onPress}>
        <BusketSecondary style={styles.svgBusket} />
        <Text style={[styles.text, styles.secondaryText]}>{title}</Text>
        <ArrowSecondary style={styles.svgArrow} />
      </TouchableOpacity>
    </View>
  );
};

export const DisabledRoundedButtonBusketArrow = ({
  onPress,
  title,
}: UniversalButtonsProps) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.button, styles.buttonSecondaryRounded]}
        onPress={onPress}>
        <Busket style={styles.svgBusket} />
        <Text style={styles.text}>{title}</Text>
        <Arrow style={styles.svgArrow} />
      </TouchableOpacity>
    </View>
  );
};

export const PrimaryFilledButtonBusketArrow = ({
  onPress,
  title,
}: UniversalButtonsProps) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.button, styles.buttonPrimaryFilled]}
        onPress={onPress}>
        <Busket style={styles.svgBusket} />
        <Text style={styles.text}>{title}</Text>
        <Arrow style={styles.svgArrow} />
      </TouchableOpacity>
    </View>
  );
};

export const SecondaryFilledButtonBusketArrow = ({
  onPress,
  title,
}: UniversalButtonsProps) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.button, styles.buttonSecondaryFilled]}
        onPress={onPress}>
        <BusketSecondary style={styles.svgBusket} />
        <Text style={[styles.text, styles.secondaryText]}>{title}</Text>
        <ArrowSecondary style={styles.svgArrow} />
      </TouchableOpacity>
    </View>
  );
};

export const DisabledFilledButtonBusketArrow = ({
  onPress,
  title,
}: UniversalButtonsProps) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.button, styles.buttonDisabledFilled]}
        onPress={onPress}>
        <Busket style={styles.svgBusket} />
        <Text style={styles.text}>{title}</Text>
        <Arrow style={styles.svgArrow} />
      </TouchableOpacity>
    </View>
  );
};

export const DarkThemeRoundedButtonBusketArrow = ({
  onPress,
  title,
}: UniversalButtonsProps) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.button, styles.buttonDarkThemeRounded]}
        onPress={onPress}>
        <Busket style={styles.svgBusket} />
        <Text style={styles.text}>{title}</Text>
        <Arrow style={styles.svgArrow} />
      </TouchableOpacity>
    </View>
  );
};

export const DarkThemeFilledButtonBusketArrow = ({
  onPress,
  title,
}: UniversalButtonsProps) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.button, styles.buttonDarkThemeFilled]}
        onPress={onPress}>
        <Busket style={styles.svgBusket} />
        <Text style={styles.text}>{title}</Text>
        <Arrow style={styles.svgArrow} />
      </TouchableOpacity>
    </View>
  );
};
