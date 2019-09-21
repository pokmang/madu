import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native';

class Details extends Component {
    static navigationOptions = {
        title: 'Details',
    };
    render() {
        return (
            <View><Text style = {{backgroundColor: '#fffff' ,width:'100%', height:'100%', justifyContent : 'center'}}>Hello World!</Text></View>

        )
    }
}
export default Details;