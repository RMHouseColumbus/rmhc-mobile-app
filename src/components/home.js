import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, StatusBar } from 'react-native';
import { Container, Content, Grid, Row, Col } from 'native-base';
import { MainHeader } from '../components/mainheader.js';

export default class Home extends React.Component {
    render() {
        return (
            
            <View style={{ flex: 1 }}>
               <MainHeader title="Welcome" navigation={this.props.navigation} />
                <View style={{ flex: 1, flexDirection: 'row'}}>
                    <View style={main.container}>

                        <Text style={main.welcomeText}>Welcome</Text>
                        <Text style={{fontSize: 30, padding:5}}>to</Text>
                        <Text style={{fontSize: 40}}>Central Ohio</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                       
                    </View>
                </View>
                <View style={{ flex: 1}}>
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
        color:'red'
    },
    centralOHText:{
        fontFamily:"sans-serif",
        fontSize:40,
        color:'black'
    }

});
