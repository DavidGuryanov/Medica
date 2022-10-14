/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Button, SafeAreaView, StatusBar, Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import Onboarding from './src/screens/Onboarding';
import UniversalButtons from './src/components/UniversalButtons';

export type RootStackParamList = {
  Onboarding: undefined;
  'Log In': undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'Log In'>;
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

function HomeScreen({navigation}: HomeScreenProps) {
  return (
    <SafeAreaView>
      <StatusBar />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
      </View>
      <Button
        title="Go to Onboarding"
        onPress={() => navigation.navigate('Onboarding')}
      />
      <Button
        title="Go to Log In"
        onPress={() => navigation.navigate('Log In')}
      />
    </SafeAreaView>
  );
}

const onPress = () => console.log('');

function LogIn({navigation}: SignInScreenProps) {
  return (
    <SafeAreaView>
      <StatusBar />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Log In</Text>
      </View>
      <Button
        title="Go to Onboarding"
        onPress={() => navigation.navigate('Onboarding')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <UniversalButtons
        title={'Privet'}
        onPress={onPress}
        isPrimaryRoundedButton
      />
    </SafeAreaView>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{title: 'Onboarding'}}
        />
        <Stack.Screen
          name="Log In"
          component={LogIn}
          options={{title: 'Log In'}}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
