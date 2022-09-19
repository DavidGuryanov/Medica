import React, {useEffect, useRef, useState} from 'react';
import {Animated, Easing, StyleSheet} from 'react-native';
import Loader from '../../assets/loader.svg';

const styles = StyleSheet.create({
  loader: {
    // transform: [{rotate: '10deg'}],
    // backgroundColor: 'green',
    width: 60,
    height: 60,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

const AnimatedLoader = ({isLoading}: {isLoading: boolean}) => {
  let spinAnimation = useRef(new Animated.Value(0)).current;
  const animation = Animated.loop(
    Animated.timing(spinAnimation, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
  );
  useEffect(() => {
    if (isLoading) {
      animation.reset();
      animation.start();
    } else {
      animation.stop();
    }
  }, [isLoading, animation]);

  return (
    <Animated.View
      style={{
        ...styles.loader,
        transform: [
          {
            rotate: spinAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '360deg'], // 0 : 150, 0.5 : 75, 1 : 0
            }),
          },
        ],
        // opacity: fadeAnim,
      }}>
      <Loader width={60} height={60} />
    </Animated.View>
  );
};

export default AnimatedLoader;

export function useLoader(): [
  JSX.Element,
  React.Dispatch<React.SetStateAction<boolean>>,
] {
  let spinAnimation = useRef(new Animated.Value(0)).current;
  const [loading, setLoading] = useState(false);

  const animation = Animated.loop(
    Animated.timing(spinAnimation, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
  );
  useEffect(() => {
    if (loading) {
      animation.reset();
      animation.start();
    } else {
      animation.stop();
    }
  }, [loading, animation]);

  const Component = (
    <Animated.View
      style={{
        ...styles.loader,
        transform: [
          {
            rotate: spinAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '360deg'], // 0 : 150, 0.5 : 75, 1 : 0
            }),
          },
        ],
        // opacity: fadeAnim,
      }}>
      <Loader width={60} height={60} />
    </Animated.View>
  );

  return [Component, setLoading];
}
