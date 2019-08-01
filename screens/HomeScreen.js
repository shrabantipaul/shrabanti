import React,{Component} from 'react';
import {Text,View} from 'react-native';

class HomeScreen extends Component{
    render(){
        return(
            <View style={{flex:1,alignItems:"center",justifyContent:'center'}}>
            <Text>home screen</Text>
            </View>
        )
    }
}

export default HomeScreen;