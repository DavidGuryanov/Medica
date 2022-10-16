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
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import Onboarding from './src/screens/Onboarding';
import {darkTheme, theme} from './src/utils/theme';
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

const onPress = () => console.log('');

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
      <ScrollView
        contentContainerStyle={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          backgroundColor: 'grey',
          height: 2300,
          padding: 10,
          paddingBottom: 100,
        }}>
        <UniversalButtons
          title={'Round + primary'}
          onPress={onPress}
          rounded
          primary
        />
        <UniversalButtons title={'Im primary'} onPress={onPress} primary />
        <UniversalButtons
          title={'Round + secondary'}
          onPress={onPress}
          rounded
        />
        <UniversalButtons
          title={'Round + primary + disabled'}
          onPress={onPress}
          rounded
          primary
          disabled
        />
        <UniversalButtons
          title={'Lessrounded + primary'}
          onPress={onPress}
          primary
        />
        <UniversalButtons title={'Lessrounded + secondary'} onPress={onPress} />
        <UniversalButtons
          title={'Disabled + primary'}
          onPress={onPress}
          disabled
          primary
        />
        <UniversalButtons
          title={'Dark + primary + rounded'}
          onPress={onPress}
          dark
          primary
          rounded
        />
        <UniversalButtons
          title={'Dark + primary + lessrounded'}
          onPress={onPress}
          dark
          primary
        />
        <UniversalButtons
          title={'Round + mini + primary'}
          onPress={onPress}
          primary
          rounded
          mini
        />
        <UniversalButtons
          title={'Round + mini + secondary'}
          onPress={onPress}
          rounded
          mini
        />
        <UniversalButtons
          title={'mini disabled'}
          onPress={onPress}
          rounded
          disabled
          mini
        />
        <UniversalButtons
          title={'mini + pr + disabled'}
          onPress={onPress}
          primary
          disabled
          mini
        />
        <UniversalButtons title={'mini'} onPress={onPress} mini />
        <UniversalButtons
          title={'mini + pr + disabled'}
          onPress={onPress}
          mini
          disabled
          primary
        />
        <UniversalButtons
          title={'mini + dark + pr + round'}
          onPress={onPress}
          mini
          dark
          rounded
          primary
        />
        <UniversalButtons
          title={'Pr + round + icon'}
          onPress={onPress}
          primary
          rounded
          iconStart="play"
        />
        <UniversalButtons
          title={'Pr + round + icon'}
          onPress={onPress}
          primary
          rounded
          iconStart="basket"
        />
        <UniversalButtons
          title={'Pr + round + 2icons'}
          onPress={onPress}
          primary
          rounded
          iconStart="basket"
          iconEnd="arrow"
        />
        <UniversalButtons
          title={'round + 2icons'}
          onPress={onPress}
          rounded
          iconStart="basketSecondary"
          iconEnd="arrowSecondary"
        />
        <UniversalButtons
          title={'Pr + round + 2icons'}
          onPress={onPress}
          primary
          iconStart="basket"
          iconEnd="arrow"
        />
        <UniversalButtons
          title={'Pr + round + dark + 2icons'}
          onPress={onPress}
          primary
          dark
          rounded
          iconStart="basket"
          iconEnd="arrow"
        />
      </ScrollView>
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
