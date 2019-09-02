import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationNavigatorProps } from 'react-navigation';
import BaseFooter from '../../shared/footer'
import Logo from '../../../images/logo_landscape.svg'
import Henry from '../../../images/henry_landingpage.svg'

export interface HomeScreenProps extends NavigationNavigatorProps {
}

export default class Home extends React.Component <HomeScreenProps,{}> {

    static navigationOptions = {
        title: 'RMHC Central Ohio',
        headerTitleStyle: {
            fontSize: 20,
            color: '#ffffff'
        }
    }
    render() {
        return (
            <View style={styles.main}>
                
                <StatusBar backgroundColor="#4872ae" barStyle="dark-content" style={{color:"#FFFFFF"}}/>

                <View style={{ flex: 1 }}>
                    <Text style={styles.welcomeText}>Welcome To</Text>
                </View>

                <Logo style={{flex: 5, alignSelf: 'center'}}/>

                <View style={{ flex: 3, alignSelf: 'stretch', flexDirection: 'row'}}>
                    <Henry width={375} height={400} style={{ alignSelf: 'stretch'}}/>
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
