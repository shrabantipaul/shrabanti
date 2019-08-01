import React from 'react';
import {Text} from 'react-native'; 
import firebase from 'firebase';
import LoginScreen from './LoginScreen';

export default class Logout extends React.Component {

    componentWillMount(){
        
            firebase.auth().signOut();
      
    }
    render(){
        console.log(firebase.auth().currentUser)
        return(
            <LoginScreen />
        )
    }
    
  }