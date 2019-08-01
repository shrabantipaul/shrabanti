import React,{Component} from 'react';
import {Text,View,StyleSheet,Dimensions,ScrollView} from 'react-native';
import myjson from '../data/holidaylist.json';

class HolidayScreen extends Component{
    render(){
        console.log(Dimensions.get('window').height)
    
        return( 
            <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.heading}>PUBLIC HOLIDAYS</Text>
            {myjson.public.map((v,i)=>{
                return(
                    <View key={i} style={{...styles.list,backgroundColor:Date.now()>parseFloat(v.x)?'#cccccc':'#b3d1ff'}}>   
                        <Text style={{width:'30%'}}>{v.date}</Text>
                        <Text style={{width:'30%'}}>{v.day}</Text>
                        <Text style={{width:'30%'}}>{v.occasion}</Text>
                    </View> 
                )
         })} 

            <Text style={styles.heading}>OPTIONAL HOLIDAYS</Text>
            {myjson.optional.map((v,i)=>{
                return(
                    <View key={i} style={{...styles.list,backgroundColor:Date.now()>parseFloat(v.x)?'#cccccc':'#b3d1ff'}}>   
                        <Text style={{width:'30%'}}>{v.date}</Text>
                        <Text style={{width:'30%'}}>{v.day}</Text>
                        <Text style={{width:'30%'}}>{v.occasion}</Text>
                    </View> 
                )
         })} 

            <Text style={{...styles.heading}}>PUBLIC HOLIDAYS ON WEEKEND</Text>
            {myjson.weekendHoliday.map((v,i)=>{
                return(
                    <View key={i} style={{...styles.list,backgroundColor:Date.now()>parseFloat(v.x)?'#cccccc':'#b3d1ff'}}>   
                        <Text style={{width:'30%'}}>{v.date}</Text>
                        <Text style={{width:'30%'}}>{v.day}</Text>
                        <Text style={{width:'30%'}}>{v.occasion}</Text>
                    </View> 
                )
         })} 

            <View style={{height:50,width:Dimensions.get('window').width,backgroundColor:'white'}}></View>
            </ScrollView>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        marginTop:20,
        alignItems:'center'
    },
    list:{
        flexDirection:'row',
        justifyContent:'space-around',
        height:50,
        width:Dimensions.get('window').width,
        padding:5,
        margin:5,
        alignItems:'center'
    },
    heading:{
        marginTop:30,
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center'
    }
})

export default HolidayScreen;