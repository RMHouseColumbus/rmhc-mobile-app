import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, StatusBar } from 'react-native';

export default class Staff extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={main.container}>
                        <Text style={main.welcomeText}>Staff</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const main = StyleSheet.create({
    container:{
        flex:1,
        marginLeft:20,
        top:50
    },
    welcomeText:{
        fontFamily:"sans-serif",
        fontSize:45,
        color:'black'
    }
});
