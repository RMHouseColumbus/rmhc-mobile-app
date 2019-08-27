import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, StatusBar } from 'react-native';
import BaseFooter from './footer.js'
export default class Meals extends React.Component {

    static navigationOptions = {

        title: 'Meals',   
    } 
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor="#4872ae" barStyle="light-content" />
                <View style={{ flex: 0.9, flexDirection: 'row' }}>
                    <View style={main.container}>
                       
                    </View>
                </View>
                <View style={{ flex: 0.1 }}>
                    <BaseFooter navigation={this.props.navigation} />
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
