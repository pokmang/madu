import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet ,StatusBar , AsyncStorage } from 'react-native'
import Details  from './Details';
import ImagesExample from './Login';

const userInfo =  {email: 'usman' , password: '12345'}


class Inputs extends Component {
    static navigationOptions = {
        title: 'inputs',
      };

   constructor(props){
       super(props);
       this.state = {
        email: '' ,
        password: ''
       }
       
    }
    _login = async () => {
        const { navigation } = this.props
        console.log(this.props.navigation);
        
         if(userInfo.email === this.state.email && userInfo.password === this.state.password){
             alert('Wellcome')
             navigation.navigate('Memberarea')
             
         } else{
             alert('Email or Password is incorrect.');
         }          
    }

   render() {
       //const {navigate} = this.props.navigation;
       //const {navigate}=this.props.navigation;
      return (
         <View style = {styles.container}>
            < ImagesExample />
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {(email)=>this.setState({email})}
               value={this.state.email}
               />
               
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               secureTextEntry 
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {(password)=>this.setState({password})}
               value={this.state.password}
               />
               
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress={this._login}
               //onPress =>= {  () => this.login(this.state.email, this.state.password) }
               >
               <Text style = {styles.submitButtonText}> login </Text>
            </TouchableOpacity>
         </View>
      )
   }
   
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 23,
      alignItems: 'center'
   },
   input: {
      margin: 8,
      height: 40,
      width: 300,
      borderColor: '#7a42f4',
      borderWidth: 2,
      borderRadius:10,
      padding: 8
     
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
      borderRadius:10,
      alignItems: 'center',
      
    
      
   },
   submitButtonText:{
      color: 'white',
      fontSize: 17
      
   }
})