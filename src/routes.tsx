import React, { useContext, useEffect } from 'react';
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
import Menu, { HomeLeft } from './views/Menu';
import HomeRight from './components/HomeRight';

import { AppContext } from './App';
import HeaderNavigationModal from './components/BottomModals/HeaderNavigationModal';
import ResetPassword from './views/ResetPassword';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  const theme = useContext(ThemeContext);
  const { inSearch } = useContext(AppContext);

  useEffect(() => {
    console.log('deele', theme);
  }, [theme]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerStyle: {
            backgroundColor: theme.navigationBgColor,
          },
          headerTintColor: theme.navigationForeground,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: 'AktivBold',
          },
          headerLeft: () => <HeaderBack />,
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
          name="auth.reset"
          component={ResetPassword}
          options={{ title: 'Reset Password' }}
        />
        <Stack.Screen
          name="auth.landing"
          component={AuthLanding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="home"
          component={Menu}
          options={{
            title: 'Θαλία',
            headerLeft: HomeLeft,
            headerStyle: {
              shadowOpacity: 0,
              elevation: 0,
              backgroundColor: theme.navigationBgColor,
            },
            headerTintColor: theme.navigationForeground,
            headerRight: () => <HomeRight />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
