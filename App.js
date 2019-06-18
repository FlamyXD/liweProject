import React from 'react'
import {StatusBar, StyleSheet, Text, View, Image, ImageBackground} from 'react-native'
import Preload from './src/component/welcomeScreen/background'
import Log from './src/component/loginScreen/login'
import Registation from './src/component/loginScreen/Registation'
import Home from './src/component/CoreScreen/Home'
import TheTask from './src/component/CoreScreen/Task'
import ProfileScreen from './src/component/CoreScreen/Profile'
import CompleteTasks from './src/component/CoreScreen/CompleteTasks'
import Settings from './src/component/CoreScreen/Settings'
import EditProfile from './src/component/CoreScreen/EditProfile'
import SlideMenu from './src/component/CoreScreen/SlideMenu'
import Rewards from './src/component/CoreScreen/Rewards'


import { createStackNavigator, createAppContainer, createSwitchNavigator,createDrawerNavigator } from 'react-navigation';

const PreLoadStack = createStackNavigator({
  OneScreen: Preload
})
const TaskStask = createStackNavigator({
  TaskScreen: TheTask,
})
const AuthStack = createStackNavigator({
  LoginScreen: Log,
  RegScreen: Registation,
})

const DrawerStack = createDrawerNavigator({
  HomeScreen: Home,
  Profile: ProfileScreen,
  CompleteTasks: CompleteTasks,
  Settings: Settings,
},
{
  contentComponent: SlideMenu,
})

const Container = createAppContainer(
  createSwitchNavigator(
    {
      //PreLoad: PreLoadStack,
      Auth: AuthStack,
      Drawer:DrawerStack,
      Task:TaskStask,
      EditProfile: EditProfile,
      Rewards: Rewards
    }
))



export default class AppBase extends React.Component {
  componentDidMount() {StatusBar.setHidden(true)}
  render() {
    return (
      <Container/>
    )
  }
}
