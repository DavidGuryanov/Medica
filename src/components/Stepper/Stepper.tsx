import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

interface IStepperProps {
  steps: number;
  current: number;
  onChange: (x: number) => void;
}

export const Stepper = ({steps, current, onChange}: IStepperProps) => {
  const totalSteps = new Array(steps).fill(null);
  return (
    <View style={styles.container}>
      {totalSteps.map((_step, ind) => {
        return current === ind ? (
          <LinearGradient
            style={styles.activeStep}
            colors={['#246BFD', '#5099FF']}
            useAngle={true}
            angle={286}
            key={ind}
          />
        ) : (
          <TouchableOpacity
            hitSlop={{
              top: 20,
              left: 16,
              bottom: 20,
              right: 16,
            }}
            style={styles.idleStep}
            key={ind}
            onPress={() => {
              onChange(ind);
            }}
          />
        );
      })}
    </View>
  );
};
