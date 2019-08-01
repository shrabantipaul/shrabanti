import React,{Component} from 'react';
import {View,StyleSheet,ActivityIndicator} from 'react-native';
import Firebase from 'firebase';
import Spinner from '../spinner';




class LoadingScreen extends Component{

    componentDidMount(){
        this.checkIfLoggedIn();
    }

    checkIfLoggedIn=()=>{
        Firebase.auth().onAuthStateChanged(function(user)
        {
            if(user)
            {
                console.log('************')
                this.props.navigation.navigate('DashboardScreen');
            }

            else{
                this.props.navigation.navigate('LoginScreen');
            }
        }.bind(this)
        )
    }

    render(){
        return(
            <View style={styles.container}>
                <Spinner size="large" />
            </View>
        );
    }
}

export default LoadingScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});