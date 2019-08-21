import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, StatusBar } from 'react-native';
import { MainHeader } from '../components/header.js';

export default class Neighborhood extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <MainHeader title="Neighborhood" navigation={this.props.navigation} />
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={main.container}>
                        <Text style={main.welcomeText}>Meals</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const main = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 20,
        top: 50
    },
    welcomeText: {
        fontFamily: "sans-serif",
        fontSize: 45,
        color: 'black'
    }
});
