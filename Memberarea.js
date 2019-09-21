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
            name: 'Ben',
         },
         {
            id: 1,
            name: 'Susan',
         },
         {
            id: 2,
            name: 'Robert',
         },
         {
            id: 3,
            name: 'Mary',
         }
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

         <View style={{ backgroundColor: '#yellow', width: '100%', height: '100%', justifyContent: 'center' }}  >
            <Text style={styles.title}>MADU EVENTS</Text>
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

   },
   title: {
      color: 'black',
      alignSelf: 'center',      
      fontSize: 30,
      backgroundColor: 'yellow',
      margin: 15,
      height: 55,
      width: 200,
      borderColor: '#7a42f4',
      borderWidth: 2,
      borderRadius:10,
      padding: 8,

   },
   text: {
      color: '#4f603c'
   },
   logout: {
      alignSelf: 'flex-end',
     
   }


})



