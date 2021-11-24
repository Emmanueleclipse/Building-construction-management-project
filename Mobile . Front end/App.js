/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import Route from './App/Navigation/Route';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
import { MenuProvider } from 'react-native-popup-menu';

const App = () => {
  return (
    <SafeAreaProvider>
      <MenuProvider>
        <Route />
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </MenuProvider>
    </SafeAreaProvider>

  );
};

export default App;
