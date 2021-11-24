
import React, { memo } from 'react';
import { Icon } from 'react-native-elements'

import { Dimensions, Image, StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, getFocusedRouteNameFromRoute, } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { LocalData, Params, Urls } from '../Common/Urls';

import Splash from '../Screens/Splash';
import Login from '../Screens/Login';
import Feed from '../Screens/Feed';
import Messages from '../Screens/Messages';
import Schedule from '../Screens/Schedule';
import Headline from '../Screens/Headline';
import More from '../Screens/More';
import NewMessage from '../Screens/NewMessage';
import Crew from '../Screens/Crew';
import Addcrew from '../Screens/Addcrew';
import ManageHome from '../Screens/ManageHome';
import UserSetting from '../Screens/UserSetting';
import ResetPassword from '../Screens/ResetPassword';
import InviteHomeowner from '../Screens/InviteHomeowner';
import CreateProperty from '../Screens/CreateProperty';


import Colors from '../Theme/Colors';
import CustomeFonts from '../Theme/CustomeFonts';
import Images from '../Theme/Images';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialTopTabNavigator();
const TabBottom = createBottomTabNavigator();

const { height, width } = Dimensions.get('window');
import Ionicons from 'react-native-vector-icons/Ionicons';
import Register from '../Screens/Register';


const TabStack = () => {
  return (
    <TabBottom.Navigator
      initialRouteName="Home"
      backBehavior='Home'
      tabBarOptions={{
        showLabel: true,
        activeTintColor: Colors.TheamColor2,
      }}
    >

      <TabBottom.Screen
        name="Home"
        component={Feed}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />

      <TabBottom.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarLabel: 'Messages',
          tabBarIcon: ({ color, size }) => (
            <Icon type='material-community' name="message-bulleted" color={color} size={size} />
          ),
        }}
      />

      <TabBottom.Screen
        name="Schedule"
        component={Schedule}
        options={{
          tabBarLabel: 'Schedule',
          tabBarIcon: ({ color, size }) => (
            <Icon type='material-community' name="calendar" color={color} size={size} />
          ),
        }}
      />

      <TabBottom.Screen
        name="Headline"
        component={Headline}
        options={{
          tabBarLabel: 'Headline',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="newspaper-outline" color={color} size={size} />
          ),
        }}
      />

      <TabBottom.Screen
        name="More"
        component={More}
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="menu" color={color} size={size} />
          ),
        }}
      />


    </TabBottom.Navigator>
  );
}

const TabStack_More = () => {
  return (
    <TabBottom.Navigator
      initialRouteName="ManageHome"
      backBehavior='ManageHome'
      tabBarOptions={{
        showLabel: true,
        activeTintColor: Colors.TheamColor2,
      }}
    >

      <TabBottom.Screen
        name="Home"
        component={Feed}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />

      <TabBottom.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarLabel: 'Messages',
          tabBarIcon: ({ color, size }) => (
            <Icon type='material-community' name="message-bulleted" color={color} size={size} />
          ),
        }}
      />

      <TabBottom.Screen
        name="Schedule"
        component={Schedule}
        options={{
          tabBarLabel: 'Schedule',
          tabBarIcon: ({ color, size }) => (
            <Icon type='material-community' name="calendar" color={color} size={size} />
          ),
        }}
      />

      <TabBottom.Screen
        name="Headline"
        component={Headline}
        options={{
          tabBarLabel: 'Headline',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="newspaper-outline" color={color} size={size} />
          ),
        }}
      />

      <TabBottom.Screen
        name="ManageHome"
        component={ManageHome}
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="menu" color={color} size={size} />
          ),
        }}
      />


    </TabBottom.Navigator>
  );
}

const TabStack_User = () => {
  return (
    <TabBottom.Navigator
      initialRouteName="UserSetting"
      backBehavior='UserSetting'
      tabBarOptions={{
        showLabel: true,
        activeTintColor: Colors.TheamColor2,
      }}
    >

      <TabBottom.Screen
        name="Home"
        component={Feed}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />

      <TabBottom.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarLabel: 'Messages',
          tabBarIcon: ({ color, size }) => (
            <Icon type='material-community' name="message-bulleted" color={color} size={size} />
          ),
        }}
      />

      <TabBottom.Screen
        name="Schedule"
        component={Schedule}
        options={{
          tabBarLabel: 'Schedule',
          tabBarIcon: ({ color, size }) => (
            <Icon type='material-community' name="calendar" color={color} size={size} />
          ),
        }}
      />

      <TabBottom.Screen
        name="Headline"
        component={Headline}
        options={{
          tabBarLabel: 'Headline',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="newspaper-outline" color={color} size={size} />
          ),
        }}
      />

      <TabBottom.Screen
        name="UserSetting"
        component={UserSetting}
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="menu" color={color} size={size} />
          ),
        }}
      />


    </TabBottom.Navigator>
  );
}

const TabStack_Crew = () => {
  return (
    <TabBottom.Navigator
      initialRouteName="Crew"
      backBehavior='Crew'
      tabBarOptions={{
        showLabel: true,
        activeTintColor: Colors.TheamColor2,
      }}
    >

      <TabBottom.Screen
        name="Home"
        component={Feed}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />

      <TabBottom.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarLabel: 'Messages',
          tabBarIcon: ({ color, size }) => (
            <Icon type='material-community' name="message-bulleted" color={color} size={size} />
          ),
        }}
      />

      <TabBottom.Screen
        name="Schedule"
        component={Schedule}
        options={{
          tabBarLabel: 'Schedule',
          tabBarIcon: ({ color, size }) => (
            <Icon type='material-community' name="calendar" color={color} size={size} />
          ),
        }}
      />

      <TabBottom.Screen
        name="Headline"
        component={Headline}
        options={{
          tabBarLabel: 'Headline',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="newspaper-outline" color={color} size={size} />
          ),
        }}
      />

      <TabBottom.Screen
        name="Crew"
        component={Crew}
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="menu" color={color} size={size} />
          ),
        }}
      />


    </TabBottom.Navigator>
  );
}

const TabStack_New_Message = () => {
  return (
    <TabBottom.Navigator
      initialRouteName="NewMessage"
      backBehavior='NewMessage'
      tabBarOptions={{
        showLabel: true,
        activeTintColor: Colors.TheamColor2,
      }}
    >

      <TabBottom.Screen
        name="Home"
        component={Feed}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />

      <TabBottom.Screen
        name="NewMessage"
        component={NewMessage}
        options={{
          tabBarLabel: 'Messages',
          tabBarIcon: ({ color, size }) => (
            <Icon type='material-community' name="message-bulleted" color={color} size={size} />
          ),
        }}
      />

      <TabBottom.Screen
        name="Schedule"
        component={Schedule}
        options={{
          tabBarLabel: 'Schedule',
          tabBarIcon: ({ color, size }) => (
            <Icon type='material-community' name="calendar" color={color} size={size} />
          ),
        }}
      />

      <TabBottom.Screen
        name="Headline"
        component={Headline}
        options={{
          tabBarLabel: 'Headline',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="newspaper-outline" color={color} size={size} />
          ),
        }}
      />

      <TabBottom.Screen
        name="More"
        component={More}
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="menu" color={color} size={size} />
          ),
        }}
      />


    </TabBottom.Navigator>
  );
}

const TabStack_ADD_Crew = () => {
  return (
    <TabBottom.Navigator
      initialRouteName="Addcrew"
      backBehavior='Addcrew'
      tabBarOptions={{
        showLabel: true,
        activeTintColor: Colors.TheamColor2,
      }}
    >

      <TabBottom.Screen
        name="Home"
        component={Feed}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />

      <TabBottom.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarLabel: 'Messages',
          tabBarIcon: ({ color, size }) => (
            <Icon type='material-community' name="message-bulleted" color={color} size={size} />
          ),
        }}
      />

      <TabBottom.Screen
        name="Schedule"
        component={Schedule}
        options={{
          tabBarLabel: 'Schedule',
          tabBarIcon: ({ color, size }) => (
            <Icon type='material-community' name="calendar" color={color} size={size} />
          ),
        }}
      />

      <TabBottom.Screen
        name="Headline"
        component={Headline}
        options={{
          tabBarLabel: 'Headline',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="newspaper-outline" color={color} size={size} />
          ),
        }}
      />

      <TabBottom.Screen
        name="Addcrew"
        component={Addcrew}
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="menu" color={color} size={size} />
          ),
        }}
      />


    </TabBottom.Navigator>
  );
}

const Route = () => (

  <NavigationContainer >
    <Stack.Navigator initialRouteName='Splash' >
      <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name='Register' component={Register} options={{ headerShown: false }} />
      <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
      <Stack.Screen name='Home' component={TabStack} options={{ headerShown: false }} />
      <Stack.Screen name='NewMessage' component={TabStack_New_Message} options={{ headerShown: false }} />
      <Stack.Screen name='Crew' component={TabStack_Crew} options={{ headerShown: false }} />
      <Stack.Screen name='Addcrew' component={TabStack_ADD_Crew} options={{ headerShown: false }} />
      <Stack.Screen name='ManageHome' component={TabStack_More} options={{ headerShown: false }} />
      <Stack.Screen name='UserSetting' component={TabStack_User} options={{ headerShown: false }} />
      <Stack.Screen name='ResetPassword' component={ResetPassword} options={{ headerShown: false }} />
      <Stack.Screen name='InviteHomeowner' component={InviteHomeowner} options={{ headerShown: false }} />
      <Stack.Screen name='CreateProperty' component={CreateProperty} options={{ headerShown: false }} />


    </Stack.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  HeaderTextstyle: {
    fontFamily: CustomeFonts.good_time_rg,
    fontSize: 14, textTransform: 'uppercase'
  },
  con: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: 'black'
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    backgroundColor: 'transparent',
    width: 40,
    borderRadius: 20,
  }
});

export default Route;