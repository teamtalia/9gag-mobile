import React, { useContext } from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { ThemeContext } from 'styled-components';
import Login from './views/Login';
import AuthLanding from './views/AuthLanding';
import Signup from './views/Signup';
import ForgotPassword from './views/ForgotPassword';
import HeaderBack from './components/HeaderBack';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  const theme = useContext(ThemeContext);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="auth.landing"
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerStyle: {
            backgroundColor: theme.navigationBgColor,
          },
          headerTintColor: theme.navigationForeground,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: 'AktivBold',
          },
          headerLeft: HeaderBack,
        }}
      >
        <Stack.Screen
          name="auth.login"
          component={Login}
          options={{ title: 'Welcome back!' }}
        />
        <Stack.Screen
          name="auth.signup"
          component={Signup}
          options={{ title: 'Join Θαλία' }}
        />
        <Stack.Screen
          name="auth.forgot"
          component={ForgotPassword}
          options={{ title: 'Forgot Password' }}
        />
        <Stack.Screen
          name="auth.landing"
          component={AuthLanding}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
