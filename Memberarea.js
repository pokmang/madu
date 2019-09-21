import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import ImagesExample from './Login';
import Inputs from './inputs.js';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const userInfo = { email: '', password: '' }

class Memberarea extends React.Component {
   static NavigationOption = {
      title: 'Memberarea'
   };
   state = {
      names: [
         {
            id: 0,
            name: 'Muslim',
         },
         {
            id: 1,
            name: 'Usman',
         },
         {
            id: 2,
            name: 'Soffee',
         },
         {
            id: 3,
            name: 'Ruslam',
         },
         {
            id: 3,
            name: 'Nashan',
         },
         {
            id: 3,
            name: 'Masran',
         },
      ]
   }
   alertItemName = (item) => {
      alert(item.name)
   }

   test = () => {
      this.props.navigation.navigate('inputs')
   }
   render() {

      return (

         <View>
            <Text style={styles.title}>MADU MEMBER</Text>
            {
               this.state.names.map((item, index) => (
                  <TouchableOpacity
                     key={item.id}
                     style={styles.container}
                     onPress={() => this.alertItemName(item)}>
                     <Text style={styles.text}>
                        {item.name}
                     </Text>
                  </TouchableOpacity>
               ))
            }

            <View style={styles.container}>


               <TouchableOpacity
                  onPress={this.test}
               >
                  <Text style={styles.logout} > logout </Text>
               </TouchableOpacity>
               {/* < Inputs /> */}
            </View>


         </View>
      )
   }
}
export default Memberarea;




const styles = StyleSheet.create({
   container: {
      alignItems: 'center',
      justifyContent: 'flex-end',
      width: '100%',
      height: '11%',
      backgroundColor: '#00FA9A'

   },

  
   title: {
      color: 'black',
      alignSelf: 'center',
      fontSize: 30,
      backgroundColor: 'yellow',
      margin: 15,
      height: 55,
      width: 240,
      borderColor: '#7a42f4',
      borderWidth: 2,
      borderRadius: 10,
      padding: 8,
      marginTop: 50


   },
   text: {
      
      color: 'black',
      alignSelf: 'center',
      fontSize: 30,
      backgroundColor: '#00FFFF',
      margin: 15,
      height: 55,
      width: 350,
      borderColor: '#7a42f4',
      borderWidth: 2,
      borderRadius: 5,
      padding: 8,
      marginTop: 50

   },
   logout: {
      margin: -20,
      height: 55,
      width: 118,

      borderWidth: 2,
      borderRadius: 25,
      fontSize: 30,
      padding: 8,
      backgroundColor: '#9400D3'
      

   }


})



