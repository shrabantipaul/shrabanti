import React,{Component} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
// import Expo from 'expo';
import {Google} from 'expo';
import firebase from 'firebase';
import Spinner from '../spinner';

class LoginScreen extends Component{

  state={loading:false}

  onSignIn=googleUser=> {
    // console.log('Google Auth Response', googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase.auth().onAuthStateChanged(function(firebaseUser) {
      unsubscribe();
      // Check if we are already signed-in Firebase with the correct user.
      if (!this.isUserEqual(googleUser, firebaseUser)) {
        // Build Firebase credential with the Google ID token.
        var credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.idToken,
          googleUser.accessToken, 
          );
        // Sign in with credential from the Google user.
        firebase.auth().signInAndRetrieveDataWithCredential(credential).then(function(result){
          console.log('user signed in ');
          // console.log(credential)
          cosole.log(result)
        })
          .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
      } else {
        console.log('User already signed-in Firebase.');
      }
    }.bind(this));
  }

  isUserEqual=(googleUser, firebaseUser)=> {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
            providerData[i].uid === googleUser.getBasicProfile().getId()) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  }

  wrongDomainName(){
    alert('Please Signin with piktorlabs userId');
  }

  signInWithGoogleAsync=async()=> {

    this.setState({loading:true})

    try {
      const result = await Google.logInAsync({
        // behavior:'web',
        androidClientId: '966261106010-jai7lug4rbnuedhuc0u1ed7oq217ksj1.apps.googleusercontent.com',
        // iosClientId: YOUR_CLIENT_ID_HERE,
        scopes: ['profile', 'email'],
      });
  
      if (result.type === 'success') {
        console.log(result.user.email);
        var data=result.user.email;
        var x=data.split('@');
        var data=x[1];
        var x=data.split('.');
        var data=x[0];
        console.log(data)
        if(data=='piktorlabs')
        {
          this.onSignIn(result);
        return result.accessToken;
        }
        else{
          this.wrongDomainName();
        }
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      console.log('errorrrrr')
      return { error: true };
    }

    this.setState({loading:false})
  }

  renderButton(){
    if(this.state.loading){
        return(
            <Spinner size='small'/>
        )
    }

    return(
      <Button title='sign In with google' 
      onPress={()=>this.signInWithGoogleAsync()} />
    )
}

    render(){
        return(
            <View style={styles.container}>
               {this.renderButton()}
            </View>
        );
    }
}

export default LoginScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});
// console.log(result);
// export default result;