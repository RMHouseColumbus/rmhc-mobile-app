import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class Facilities extends React.Component {
    static navigationOptions = {
        title: 'Facilities',
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, flexDirection: 'row'}}>
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
        fontFamily:"sans-serif",
        fontSize:45,
        color:'black'
    }
});
