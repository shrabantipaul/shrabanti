import React from 'react';
import { StyleSheet} from 'react-native';
import {createAppContainer,createSwitchNavigator, createStackNavigator,createDrawerNavigator} from 'react-navigation';
import Logout from './screens/Logout';
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import HomeScreen from './screens/HomeScreen';
import LeaveScreen from './screens/LeaveScreen';
import OfficeScreen from './screens/OfficeScreen';
import HolidayScreen from './screens/HolidayScreen';
import Firebase from 'firebase';
import { firebaseConfig } from './config';




Firebase.initializeApp(firebaseConfig);
export default class App extends React.Component {
  render(){
    return (
     <AppNavigator />
    );
  }
  
}

const AppDrawerNavigator=createDrawerNavigator({
  Home:DashboardScreen,
  Logout:Logout
})

const stackNavigator = createStackNavigator({
  DashboardScreen:AppDrawerNavigator,
  HomeScreen:HomeScreen,
  LeaveScreen:LeaveScreen,
  OfficeScreen:OfficeScreen,
  HolidayScreen:HolidayScreen
},
{
  headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
  },
}
)


const AppSwitchNavigator=createSwitchNavigator({
  LoadingScreen:LoadingScreen,
  LoginScreen:LoginScreen,
  DashboardScreen:stackNavigator
}
)

const AppNavigator=createAppContainer(AppSwitchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
