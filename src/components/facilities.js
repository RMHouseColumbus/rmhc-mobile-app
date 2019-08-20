import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MainHeader } from '../components/mainheader.js';

export default class Facilities extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
               <MainHeader title="Facilities" navigation={this.props.navigation} />
                <View style={{ flex: 1, flexDirection: 'row'}}>
                    <View style={main.container}>
                        <Text style={main.welcomeText}>Facilities</Text>
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
