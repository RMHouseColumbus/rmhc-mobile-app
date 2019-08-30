import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { Container } from 'native-base'
import BaseFooter from './footer.js'
import Logo from '../../images/logo_landscape.svg'
import Henry from '../../images/henry_landingpage.svg'
import Bubble from '../../images/bubble.svg'

export default class Home extends React.Component {

    static navigationOptions = {
        title: 'RMHC Central Ohio',
    }
    render() {
        return (
            <View style={styles.main}>
                <Henry navigation={this.props.navigation} style={{ position: 'absolute', bottom: 249, zIndex: 1000, left: 50}}/>
                <StatusBar backgroundColor="#4872ae" barStyle="dark-content" style={{color:"#FFFFFF"}}/>

                <View style={{ flex: 1 }}>
                    <Text style={styles.welcomeText}>Welcome To</Text>
                </View>

                <Logo style={{flex: 5, alignSelf: 'center'}}></Logo>

                <View style={{ flex: 3, alignSelf: 'center', flexDirection: 'row'}}>
                    <Bubble navigation={this.props.navigation} style={{ position: 'absolute', top: 20, zIndex: 1000, left: -15}}/>
                </View>
                <View style={{ flex: 1.5, backgroundColor: "#4872ae", padding: 40}}>
                    <Text style={{color: '#ffffff', fontSize: 40, alignSelf: 'center'}}>Manage Your Stay With Us.</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <BaseFooter navigation={this.props.navigation} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 0
    },
    container: {
        flex: 1,
    },
    welcomeText: {
        flex: 1,
        alignSelf: 'center',
        fontSize: 33,
        fontWeight: "600",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "center",
        color: '#da291c'
    }
});
