import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LandingScreen from './src/Screens/LandingScreen';

import LoginScreen from './src/Screens/Login_Signup/LoginScreen';
import SignupScreen from './src/Screens/Login_Signup/SignupScreen';
import HomeSearch from './src/Screens/Home/HomeSearch';
import SearchResultScreen from './src/Screens/SearchResults/SearchResultScreen';
import ProfileScreen from './src/Screens/Profile/ProfileScreen';
import ReportScreen from './src/Screens/Report/ReportScreen';
import NotificationScreen from './src/Screens/Notifications/NotificationScreen';
const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <NotificationScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
