import React,{Component} from 'react';
import {View,StyleSheet,Image,Text,TouchableOpacity,ScrollView,Animated} from 'react-native';
import {LinearGradient} from 'expo';


class DashboardScreen extends Component{

    constructor(props){
        super(props)
        // this.animatedValue = new Animated.Value(0),  // Initial value for opacity: 0
        this.state={
            show:false,
            animation: new Animated.Value(),
            val:false            
        }
    }

     open_top_nav = () =>{
        
        console.log('==================')
        
        let initialValue = this.state.show ? 300 : 0,
        finalValue  = this.state.show ? 0 : 300;
        console.log(initialValue,'...........',finalValue)
        this.state.animation.setValue(initialValue); 

        if(this.state.show){
            this.setState({
                show: false
            },()=>{
                console.log('######');
                Animated.spring(     //Step 4
                    this.state.animation,
                    {
                        toValue: finalValue,
                        duration: 2000
                    }
                ).start();
            });
        }
        else{
            this.setState({
                show: true
            },()=>{
                Animated.spring(     //Step 4
                    this.state.animation,
                    {
                        toValue: finalValue,
                        duration: 2000
                    }
                ).start();
            }); 
        }
        this.setState({val:true})

    //  Animated.spring(     //Step 4
    //     this.state.animation,
    //     {
    //         toValue: finalValue,
    //         duration: 2000
    //     }
    // ).start();
    
    // let self=this;
    // if(self.state.show){
    //     setTimeout(function(){
    //         self.setState(prevState => ({
    //             show: !prevState.show
    //         }));
    //     },300)
    // }
}


     homescreenpage=()=>{
         this.props.navigation.navigate('HomeScreen')
     }

     officescreenpage=()=>{
        this.props.navigation.navigate('OfficeScreen')
    }

     leavescreenpage=()=>{
         this.props.navigation.navigate('LeaveScreen')
     }

     holidayscreen=()=>{
         this.props.navigation.navigate('HolidayScreen')
     }

    render(){
        console.log(this.state.show);
        
                return(     
            <View style={styles.container}>
                
                    {/* <Animatable.Text animation="zoomInUp">Zoom me up, Scotty</Animatable.Text> */}

                <Image style={styles.logoStyle}
                source={require('../Piktorlabs_LOGO_Black.png')}
                />
                <View style={styles.dotStyle}>
                <TouchableOpacity activeOpacity={0.5} onPress={this.open_top_nav}  >
                <Image style={{height:'100%',width:'100%'}}
                source={require('../blue_dot.png')}
                />
                </TouchableOpacity>
                </View>

                <Image style={{height:30,width:30,position:'absolute',left:5,top:50}}
                source={require('../arrow.png')}
                />
                <View style={{height: 450, width:350,position:'relative',overflow:'hidden'}}>
                    <Image
                    style={styles.imageStyle}
                    source={require('../Digi_ID_Pic.png')}
                    />
                    <View style={{alignItems:'center',position:'absolute',bottom:0}}>
                    <LinearGradient 
                    colors={['transparent','white']} 
                    start={[0,0]}
                    style={{width:500,height:200}}/>
                    </View>
                </View>
                <View style={{position:"absolute",bottom:100,alignItems:"center"}}>
                <Text style={{fontSize:40}}>John</Text>
                <Text style={{fontSize:30,opacity:0.5}}>Doe</Text>
                <Text style={{fontSize:15,opacity:0.2}}>Sr. Software Engineer</Text>
                </View>
                {/* <Button title="log out" onPress={()=>firebase.auth().signOut()} /> */}
                {/* <View style={{position:'relative',zIndex:1}}> */}
                    {/* <View style={styles.topNavContainer} /> */}
                {this.state.show &&  
                    <View style={styles.topDetails}>
                    <Animated.View style={{...styles.topNav,height:this.state.animation}}>
                        
                        <View style={{justifyContent:'center',alignItems:'center',flex:1,marginTop:50}}>
                        <Image style={{...styles.logoStyle,marginTop:20}}
                        source={require('../Piktorlabs_LOGO_Black.png')}
                        />
                        </View>

                        <Text style={{position:'absolute',top:120,left:10,color:'#8c8c8c'}}>YOUR STATUS</Text>
                        <TouchableOpacity  style={{position:'absolute',top:120,right:10,zIndex:1}} activeOpacity={0.5} onPress={this.holidayscreen}>
                            <Text style={{color:'#8c8c8c'}}>HOLIDAYS</Text>
                        </TouchableOpacity>
                        

                        <ScrollView horizontal={true} contentContainerStyle={{flexDirection:'row',justifyContent:'flex-start',bottom:20,top:30}}>
                        
                                <TouchableOpacity  activeOpacity={0.5} style={styles.ButtonStyle} onPress={this.homescreenpage}>
                                    <Text>Home</Text>
                                </TouchableOpacity>
                            
                                <TouchableOpacity  activeOpacity={0.5} style={styles.ButtonStyle} onPress={this.officescreenpage}>
                                    <Text>Office</Text>
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={0.5} style={styles.ButtonStyle} onPress={this.leavescreenpage}>
                                    <Text>Leave</Text>
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={0.5} style={styles.ButtonStyle} onPress={this.leavescreenpage}>
                                    <Text>Leave</Text>
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={0.5} style={styles.ButtonStyle} onPress={this.leavescreenpage}>
                                    <Text>Leave</Text>
                                </TouchableOpacity>
                        </ScrollView>
                    </Animated.View>
                    <TouchableOpacity onPress={this.open_top_nav} style={styles.mainNavContainer} /> 
                    </View>
                }
            </View>
        );
    }
}



export default DashboardScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        position:'relative'
        // paddingTop:50,
        // backgroundColor:'white'
        // justifyContent:'center'
    },
    imageStyle:{
        width: '100%', 
        height: '100%',
        top:50,
        position:'absolute',
        resizeMode:'center',
        // scaleX:1.2,
        // scaleY:1.2,
        transform:[
            {scaleX:1.2},
            {scaleY:1.2}
        ],
        

    },
    logoStyle:{
        width:180,
        height:30,
        resizeMode:'contain',
        marginTop:50,
        marginBottom:20,
        
    },
    dotStyle:{
        height:25,
        width:25,
        position:'absolute',
        right:'10%',
        top:50,
      
    },
   
    topDetails: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0
    },
    topNav:{
        backgroundColor: '#fff',
        position: 'relative',
        overflow: 'hidden'
        
        // transform: [
        //     { translateY: - 1000 },
        //   ],
    },
    mainNavContainer:{
        backgroundColor: '#000',
        height: '100%',
        opacity: 0.4
    },
    ButtonStyle:{
        width:100,
        height:100,
        marginTop:30,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#cccccc',
        borderRadius:20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 20,
        elevation: 5,
        marginRight:10,
        marginLeft:10,
        // marginLeft:10,
        // marginRight:10
    }
});
