import React,{Component} from 'react';
import {Text,View} from 'react-native';

class LeaveScreen extends Component{
    render(){
        return(
            <View style={{flex:1,alignItems:"center",justifyContent:'center'}}>
            <Text>Apply for leave</Text>
            </View>
        )
    }
}

export default LeaveScreen;