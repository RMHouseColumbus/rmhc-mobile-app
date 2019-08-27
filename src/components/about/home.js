import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, StatusBar } from 'react-native';


export default class About extends React.Component {

    static navigationOptions = {

        title: 'About',   
    } 
    render() {
        return (
            <View style={{ flex: 1 }}>
                
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={main.container}>
                        
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
        fontFamily:"System",
        fontSize:45,
        color:'black'
    }
});
