import Basket from '../../assets/busket.svg';
import Arrow from '../../assets/arrow.svg';
import Play from '../../assets/play.svg';
import Message from '../../assets/message.svg';
import Phone from '../../assets/phone.svg';
import Video from '../../assets/video.svg';
import BasketSecondary from '../../assets/busketSecondary.svg';
import ArrowSecondary from '../../assets/arrowSecondary.svg';
import HeartLight from '../../assets/icons/Heart_light.svg';
import HeartDark from '../../assets/icons/Heart_dark.svg';
import NotificationLight from '../../assets/icons/Notification_light.svg';
import NotificationDark from '../../assets/icons/Notification_dark.svg';
import React from 'react';
import {useColorScheme} from 'react-native';
import {SvgProps} from 'react-native-svg';

export const iconVariants = {
  basket: Basket,
  arrow: Arrow,
  play: Play,
  message: Message,
  phone: Phone,
  video: Video,
  basketSecondary: BasketSecondary,
  arrowSecondary: ArrowSecondary,
  heart: {light: HeartLight, dark: HeartDark},
  notification: {light: NotificationLight, dark: NotificationDark},
} as const;

interface TIconProps {
  type: keyof typeof iconVariants;
  [x: string]: any;
}

type ThemedIcons = {
  readonly light: React.FC<SvgProps>;
  readonly dark: React.FC<SvgProps>;
};

const Icon = ({type, ...props}: TIconProps): JSX.Element => {
  const colorScheme = useColorScheme() || 'light';
  // const IconComponent = iconVariants[type];
  // const IconComponent = iconVariants[type]?.[colorScheme] || iconVariants[type];
  let iconWithThemes = iconVariants[type] as ThemedIcons;
  let iconWithout = iconVariants[type] as React.FC<SvgProps>;
  const IconComponent = iconWithThemes[colorScheme] || iconWithout;

  return <IconComponent {...props} />;
};

// export const iconVariants2 = {
//   heart: {light: HeartLight, dark: HeartDark},
//   basket: Basket,
// } as const;
// interface TIconProps2 {
//   type: keyof typeof iconVariants2;
//   [x: string]: any;
// }
//
// const Icon2 = ({type, ...props}: TIconProps2): JSX.Element => {
//   const colorScheme = useColorScheme() || 'light';
//   const IconComponent =
//     iconVariants2[type]?.[colorScheme] || iconVariants2[type];
//
//   return <IconComponent {...props} />;
// };

export default Icon;
