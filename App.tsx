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
import {
  Button,
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import Onboarding from './src/screens/Onboarding';
import {darkTheme, theme} from './src/utils/theme';

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
      {/* eslint-disable-next-line react-native/no-inline-styles */}
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

function LogIn({navigation}: SignInScreenProps) {
  return (
    <SafeAreaView>
      <StatusBar />
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Log In</Text>
      </View>
      <Button
        title="Go to Onboarding"
        onPress={() => navigation.navigate('Onboarding')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
}

export const ThemeContext = React.createContext(theme);

const App = () => {
  const colorScheme = useColorScheme() || 'light';
  return (
    <ThemeContext.Provider value={colorScheme === 'light' ? theme : darkTheme}>
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
    </ThemeContext.Provider>
  );
};

export default App;
