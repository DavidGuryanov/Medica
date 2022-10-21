import React, {useState} from 'react';
import {Image, Text, useColorScheme, View} from 'react-native';
import styles from './styles';
import Stepper from '../../../../components/Stepper';
import UniversalButtons from '../../../../components/UniversalButtons';

const slidesData = [
  {
    text: 'Thousands of doctors & experts to help your health!',
    src: require('./img/first.png'),
  },
  {
    text: 'Health checks & consultations easily anywhere anytime',
    src: require('./img/second.png'),
  },
  {
    text: "Let's start living healthy and well with us right now!",
    src: require('./img/third.png'),
  },
];

const theme = {
  dark: {
    color: '#ffffff',
    backgroundColor: '#181A20',
  },
  light: {
    color: '#246BFD',
    backgroundColor: '#fff',
  },
};

export const Slides = () => {
  const [slide, setSlide] = useState(0);
  const colorScheme = useColorScheme() || 'light';

  return (
    <View style={{...styles.container, ...theme[colorScheme]}}>
      <Image
        source={slidesData[slide].src}
        style={styles.picture}
        resizeMode={'contain'}
      />
      <View style={styles.textWrapper}>
        <Text style={{...styles.slidesText, ...theme[colorScheme]}}>
          {slidesData[slide].text}
        </Text>
        <Stepper steps={3} current={slide} onChange={setSlide} />
        <UniversalButtons
          onPress={() => {
            if (slide < slidesData.length - 1) {
              setSlide(slide + 1);
            } else {
              setSlide(0);
            }
          }}
          title="Next"
          rounded
          primary
        />
      </View>
    </View>
  );
};
