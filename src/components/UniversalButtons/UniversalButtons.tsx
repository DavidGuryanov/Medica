import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Busket from '../../assets/busket.svg';
import Arrow from '../../assets/arrow.svg';
import Play from '../../assets/play.svg';
import Message from '../../assets/message.svg';
import Phone from '../../assets/phone.svg';
import Video from '../../assets/video.svg';
import BusketSecondary from '../../assets/busketSecondary.svg';
import ArrowSecondary from '../../assets/arrowSecondary.svg';
import {styles} from './styles';

type UniversalButtonsProps = {
  onPress: () => void;
  title: string;
  isPrimaryRoundedButton?: boolean;
  isSecondaryRoundedButton?: boolean;
  isDisabledRoundedButton?: boolean;
  isPrimaryFilledButton?: boolean;
  isSecondaryFilledButton?: boolean;
  isDisabledFilledButton?: boolean;
  isDarkThemeRoundedButton?: boolean;
  isDarkThemeFilledButton?: boolean;
  isMiniPrimaryRoundedButton?: boolean;
  isMiniSecondaryRoundedButton?: boolean;
  isMiniDisabledRoundedButton?: boolean;
  isMiniPrimaryFilledButton?: boolean;
  isMiniSecondaryFilledButton?: boolean;
  isMiniDisabledFilledButton?: boolean;
  isMiniDarkThemeRoundedButton?: boolean;
  isMiniDarkThemeFilledButton?: boolean;
  isPrimaryRoundedButtonPlay?: boolean;
  isPrimaryRoundedButtonMessage?: boolean;
  isPrimaryRoundedButtonPhone?: boolean;
  isPrimaryRoundedButtonVideo?: boolean;
  isPrimaryRoundedButtonBusketArrow?: boolean;
  isSecondaryRoundedButtonBusketArrow?: boolean;
  isDisabledRoundedButtonBusketArrow?: boolean;
  isPrimaryFilledButtonBusketArrow?: boolean;
  isSecondaryFilledButtonBusketArrow?: boolean;
  isDisabledFilledButtonBusketArrow?: boolean;
  isDarkThemeRoundedButtonBusketArrow?: boolean;
  isDarkThemeFilledButtonBusketArrow?: boolean;
  children?: JSX.Element[] | JSX.Element;
};

function UniversalButtons({
  onPress,
  title,
  isPrimaryRoundedButton,
  isSecondaryRoundedButton,
  isDisabledRoundedButton,
  isPrimaryFilledButton,
  isSecondaryFilledButton,
  isDisabledFilledButton,
  isDarkThemeRoundedButton,
  isDarkThemeFilledButton,
  isMiniPrimaryRoundedButton,
  isMiniSecondaryRoundedButton,
  isMiniDisabledRoundedButton,
  isMiniPrimaryFilledButton,
  isMiniSecondaryFilledButton,
  isMiniDisabledFilledButton,
  isMiniDarkThemeRoundedButton,
  isMiniDarkThemeFilledButton,
  isPrimaryRoundedButtonPlay,
  isPrimaryRoundedButtonMessage,
  isPrimaryRoundedButtonPhone,
  isPrimaryRoundedButtonVideo,
  isPrimaryRoundedButtonBusketArrow,
  isSecondaryRoundedButtonBusketArrow,
  isDisabledRoundedButtonBusketArrow,
  isPrimaryFilledButtonBusketArrow,
  isSecondaryFilledButtonBusketArrow,
  isDisabledFilledButtonBusketArrow,
  isDarkThemeRoundedButtonBusketArrow,
  isDarkThemeFilledButtonBusketArrow,
  children,
  ...props
}: UniversalButtonsProps): JSX.Element {
  if (isPrimaryRoundedButton) {
    return (
      <View>
        <TouchableOpacity
          style={[styles.button, styles.buttonPrimaryRounded]}
          onPress={onPress}
          {...props}>
          <Text style={styles.text}>{title}</Text>
          {children}
        </TouchableOpacity>
      </View>
    );
  } else if (isSecondaryRoundedButton) {
    return (
      <View>
        <TouchableOpacity
          style={[styles.button, styles.buttonSecondaryRounded]}
          onPress={onPress}
          {...props}>
          <Text style={[styles.text, styles.secondaryText]}>{title}</Text>
          {children}
        </TouchableOpacity>
      </View>
    );
  } else if (isDisabledRoundedButton) {
    return (
      <View>
        <TouchableOpacity
          style={[styles.button, styles.buttonSecondaryRounded]}
          onPress={onPress}
          {...props}>
          <Text style={styles.text}>{title}</Text>
          {children}
        </TouchableOpacity>
      </View>
    );
  } else if (isPrimaryFilledButton) {
    return (
      <View>
        <TouchableOpacity
          style={[styles.button, styles.buttonPrimaryFilled]}
          onPress={onPress}
          {...props}>
          <Text style={styles.text}>{title}</Text>
          {children}
        </TouchableOpacity>
      </View>
    );
  } else if (isSecondaryFilledButton) {
    return (
      <View>
        <TouchableOpacity
          style={[styles.button, styles.buttonSecondaryFilled]}
          onPress={onPress}
          {...props}>
          <Text style={[styles.text, styles.secondaryText]}>{title}</Text>
          {children}
        </TouchableOpacity>
      </View>
    );
  } else if (isDisabledFilledButton) {
    return (
      <View>
        <TouchableOpacity
          style={[styles.button, styles.buttonDisabledFilled]}
          onPress={onPress}
          {...props}>
          <Text style={styles.text}>{title}</Text>
          {children}
        </TouchableOpacity>
      </View>
    );
  } else if (isDarkThemeRoundedButton) {
    return (
      <View>
        <TouchableOpacity
          style={[styles.button, styles.buttonDarkThemeRounded]}
          onPress={onPress}
          {...props}>
          <Text style={styles.text}>{title}</Text>
          {children}
        </TouchableOpacity>
      </View>
    );
  } else if (isDarkThemeFilledButton) {
    return (
      <View>
        <TouchableOpacity
          style={[styles.button, styles.buttonDarkThemeFilled]}
          onPress={onPress}
          {...props}>
          <Text style={styles.text}>{title}</Text>
          {children}
        </TouchableOpacity>
      </View>
    );
  } else if (isMiniPrimaryRoundedButton) {
    return (
      <View>
        <TouchableOpacity
          style={[
            styles.button,
            styles.buttonPrimaryRounded,
            styles.miniButton,
          ]}
          onPress={onPress}
          {...props}>
          <Text style={styles.text}>{title}</Text>
          {children}
        </TouchableOpacity>
      </View>
    );
  } else if (isMiniSecondaryRoundedButton) {
    return (
      <View>
        <TouchableOpacity
          style={[
            styles.button,
            styles.buttonSecondaryRounded,
            styles.miniButton,
          ]}
          onPress={onPress}
          {...props}>
          <Text style={[styles.text, styles.secondaryText]}>{title}</Text>
          {children}
        </TouchableOpacity>
      </View>
    );
  } else if (isMiniDisabledRoundedButton) {
    return (
      <View>
        <TouchableOpacity
          style={[
            styles.button,
            styles.buttonSecondaryRounded,
            styles.miniButton,
          ]}
          onPress={onPress}
          {...props}>
          <Text style={styles.text}>{title}</Text>
          {children}
        </TouchableOpacity>
      </View>
    );
  } else if (isMiniPrimaryFilledButton) {
    return (
      <View>
        <TouchableOpacity
          style={[styles.button, styles.buttonPrimaryFilled, styles.miniButton]}
          onPress={onPress}
          {...props}>
          <Text style={styles.text}>{title}</Text>
          {children}
        </TouchableOpacity>
      </View>
    );
  } else if (isMiniSecondaryFilledButton) {
    return (
      <View>
        <TouchableOpacity
          style={[
            styles.button,
            styles.buttonSecondaryFilled,
            styles.miniButton,
          ]}
          onPress={onPress}
          {...props}>
          <Text style={[styles.text, styles.secondaryText]}>{title}</Text>
          {children}
        </TouchableOpacity>
      </View>
    );
  } else if (isMiniDisabledFilledButton) {
    return (
      <View>
        <TouchableOpacity
          style={[
            styles.button,
            styles.buttonDisabledFilled,
            styles.miniButton,
          ]}
          onPress={onPress}
          {...props}>
          <Text style={styles.text}>{title}</Text>
          {children}
        </TouchableOpacity>
      </View>
    );
  } else if (isMiniDarkThemeRoundedButton) {
    return (
      <View>
        <TouchableOpacity
          style={[
            styles.button,
            styles.buttonDarkThemeRounded,
            styles.miniButton,
          ]}
          onPress={onPress}
          {...props}>
          <Text style={styles.text}>{title}</Text>
          {children}
        </TouchableOpacity>
      </View>
    );
  } else if (isMiniDarkThemeFilledButton) {
    return (
      <View>
        <TouchableOpacity
          style={[
            styles.button,
            styles.buttonDarkThemeFilled,
            styles.miniButton,
          ]}
          onPress={onPress}
          {...props}>
          <Text style={styles.text}>{title}</Text>
          {children}
        </TouchableOpacity>
      </View>
    );
  } else if (isPrimaryRoundedButtonPlay) {
    return (
      <View>
        <TouchableOpacity
          style={[styles.button, styles.buttonPrimaryRounded]}
          onPress={onPress}
          {...props}>
          <Play style={styles.svgPlay} />
          <Text style={styles.text}>Play Audio Recordings</Text>
          {children}
        </TouchableOpacity>
      </View>
    );
  } else if (isPrimaryRoundedButtonMessage) {
    return (
      <View>
        <TouchableOpacity
          style={[styles.button, styles.buttonPrimaryRounded]}
          onPress={onPress}
          {...props}>
          <Message style={styles.svgMessage} />
          <Text style={styles.text}>Message (Start at 16:00 PM)</Text>
          {children}
        </TouchableOpacity>
      </View>
    );
  } else if (isPrimaryRoundedButtonPhone) {
    return (
      <View>
        <TouchableOpacity
          style={[styles.button, styles.buttonPrimaryRounded]}
          onPress={onPress}
          {...props}>
          <Phone style={styles.svgPhone} />
          <Text style={styles.text}>Voice Call (Start at 14:00 PM)</Text>
          {children}
        </TouchableOpacity>
      </View>
    );
  } else if (isPrimaryRoundedButtonVideo) {
    return (
      <View>
        <TouchableOpacity
          style={[styles.button, styles.buttonPrimaryRounded]}
          onPress={onPress}
          {...props}>
          <Video style={styles.svgVideo} />
          <Text style={styles.text}>Video Call (Start at 10:00 AM)</Text>
          {children}
        </TouchableOpacity>
      </View>
    );
  } else if (isPrimaryRoundedButtonBusketArrow) {
    return (
      <View>
        <TouchableOpacity
          style={[styles.button, styles.buttonPrimaryRounded]}
          onPress={onPress}
          {...props}>
          <Busket style={styles.svgBusket} />
          <Text style={styles.text}>{title}</Text>
          <Arrow style={styles.svgArrow} />
          {children}
        </TouchableOpacity>
      </View>
    );
  } else if (isSecondaryRoundedButtonBusketArrow) {
    return (
      <View>
        <TouchableOpacity
          style={[styles.button, styles.buttonSecondaryRounded]}
          onPress={onPress}
          {...props}>
          <BusketSecondary style={styles.svgBusket} />
          <Text style={[styles.text, styles.secondaryText]}>{title}</Text>
          <ArrowSecondary style={styles.svgArrow} />
          {children}
        </TouchableOpacity>
      </View>
    );
  } else if (isDisabledRoundedButtonBusketArrow) {
    return (
      <View>
        <TouchableOpacity
          style={[styles.button, styles.buttonSecondaryRounded]}
          onPress={onPress}
          {...props}>
          <Busket style={styles.svgBusket} />
          <Text style={styles.text}>{title}</Text>
          <Arrow style={styles.svgArrow} />
          {children}
        </TouchableOpacity>
      </View>
    );
  } else if (isPrimaryFilledButtonBusketArrow) {
    return (
      <View>
        <TouchableOpacity
          style={[styles.button, styles.buttonPrimaryFilled]}
          onPress={onPress}
          {...props}>
          <Busket style={styles.svgBusket} />
          <Text style={styles.text}>{title}</Text>
          <Arrow style={styles.svgArrow} />
          {children}
        </TouchableOpacity>
      </View>
    );
  } else if (isSecondaryFilledButtonBusketArrow) {
    return (
      <View>
        <TouchableOpacity
          style={[styles.button, styles.buttonSecondaryFilled]}
          onPress={onPress}
          {...props}>
          <BusketSecondary style={styles.svgBusket} />
          <Text style={[styles.text, styles.secondaryText]}>{title}</Text>
          <ArrowSecondary style={styles.svgArrow} />
          {children}
        </TouchableOpacity>
      </View>
    );
  } else if (isDisabledFilledButtonBusketArrow) {
    return (
      <View>
        <TouchableOpacity
          style={[styles.button, styles.buttonDisabledFilled]}
          onPress={onPress}
          {...props}>
          <Busket style={styles.svgBusket} />
          <Text style={styles.text}>{title}</Text>
          <Arrow style={styles.svgArrow} />
          {children}
        </TouchableOpacity>
      </View>
    );
  } else if (isDarkThemeRoundedButtonBusketArrow) {
    return (
      <View>
        <TouchableOpacity
          style={[styles.button, styles.buttonDarkThemeRounded]}
          onPress={onPress}
          {...props}>
          <Busket style={styles.svgBusket} />
          <Text style={styles.text}>{title}</Text>
          <Arrow style={styles.svgArrow} />
          {children}
        </TouchableOpacity>
      </View>
    );
  } else if (isDarkThemeFilledButtonBusketArrow) {
    return (
      <View>
        <TouchableOpacity
          style={[styles.button, styles.buttonDarkThemeFilled]}
          onPress={onPress}
          {...props}>
          <Busket style={styles.svgBusket} />
          <Text style={styles.text}>{title}</Text>
          <Arrow style={styles.svgArrow} />
          {children}
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View>
      <TouchableOpacity
        style={[styles.button, styles.buttonPrimaryRounded]}
        onPress={onPress}
        {...props}>
        <Text style={styles.text}>{title}</Text>
        {children}
      </TouchableOpacity>
    </View>
  );
}

export default UniversalButtons;
