import React from 'react';
import {StatusBar, StyleSheet, Text, View, Dimensions, TouchableOpacity, Linking} from 'react-native';
import {NavigationNavigatorProps, NavigationScreenProps} from 'react-navigation';
import BaseFooter from '../../shared/footer'
import Logo from '../../../images/logo_landscape.svg'
import Henry from '../../../images/henry_landingpage.svg'
import {HEADERSTYLEBLUE, HEADERTITLESTYLEWHITE} from '../../shared/fonts';
import SplashScreen from 'react-native-splash-screen'
import Youtube from "../../navigation/assets/youTube.svg";

export interface HomeScreenProps extends NavigationNavigatorProps {
}

export default class Home extends React.Component <NavigationScreenProps, {}> {

    static navigationOptions = {
        title: 'RMHC Central Ohio',
        headerStyle: HEADERSTYLEBLUE,
        headerTitleStyle: {
            color: `#FFFFFF`,
            fontSize: 28,
            fontFamily: "Raleway-Regular",
            width: Dimensions.get('window').width
        }
    };

    componentDidMount() {
        SplashScreen.hide();
    }

    render() {
        return (
            <View style={styles.main}>

                <StatusBar backgroundColor="#1c5ca3" barStyle="dark-content" style={{color: "#FFFFFF"}}/>

                <View style={{flex: 1}}>
                    <Text style={styles.welcomeText}>Welcome To</Text>
                </View>

                <Logo style={{flex: 5, alignSelf: 'center'}}/>

                <View style={{flex: 3, alignSelf: 'stretch', flexDirection: 'row', position: 'relative'}}>
                    <Henry width={375} height={400} style={{alignSelf: 'stretch'}}/>
                    <TouchableOpacity
                        style={{position: 'absolute', left: 200, bottom: 5, flexDirection: 'row', alignItems: 'center'}}
                        onPress={() => Linking.openURL("https://www.youtube.com/user/RMHCofCentralOhio")}>
                        <Youtube {...SVG}/>
                        <Text style={{marginLeft: 5, fontSize: 20, fontFamily: 'Raleway-Regular'}}>Welcome ...</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 1.5, backgroundColor: "#4872ae", padding: 40}}>
                    <Text style={{color: '#ffffff', fontSize: 40, alignSelf: 'center'}}>Manage Your Stay With Us.</Text>
                </View>

                <View style={styles.footer}>
                    <BaseFooter navigation={this.props.navigation}/>
                </View>
            </View>
        );
    }
}
const SVG = {
    // alignSelf: 'flex-end',
    Width: 200,
    Height: 52,
    // marginBottom: spacing[4]
};

const styles = StyleSheet.create({
    main: {
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
        fontFamily: 'Raleway-Regular',
        letterSpacing: 0,
        textAlign: "center",
        color: '#da291c'
    },
    footer: {
        minHeight: 63,
        maxHeight: 63,
        flex: 1
    }
});
