import React from 'react';
import {Dimensions, Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NavigationNavigatorProps, NavigationScreenProps} from 'react-navigation';
import BaseFooter from '../../shared/footer'
import Logo from '../../../images/logo_landscape.svg'
import Henry from '../../../images/henry_landingpage.svg'
import {HEADERSTYLEBLUE} from '../../shared/fonts';
import SplashScreen from 'react-native-splash-screen'
import Youtube from "../../navigation/assets/youTube.svg";
import {setStatusBar} from "../../shared/status-bar";

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
        setStatusBar(this, "#1c5ca3");
    }

    render() {
        return (
            <View style={styles.main}>
                <View style={{flex: 1}}>
                    <Text style={styles.welcomeText}>Welcome To</Text>
                </View>

                <Logo style={{flex: 5, alignSelf: 'center'}}/>

                <View style={{flex: 5, alignSelf: 'stretch', position: "relative"}}>
                    <Henry width={400} height={425} style={{alignSelf: 'center', zIndex: 100}}/>
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            left: 220,
                            bottom: 40,
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                        onPress={() => Linking.openURL("https://www.youtube.com/user/RMHCofCentralOhio")}>
                        <Youtube {...SVG}/>
                        <Text style={{
                            fontSize: 20,
                            marginLeft: 8,
                            fontFamily: 'Raleway-Regular',
                            color: "#0078d7"
                        }}>Welcome...</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 3, backgroundColor: "4872ae", alignSelf: 'center', zIndex: 101}}>
                    <Text style={styles.manage}>{"Manage Your\nStay with Us."}</Text>
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
    width: 20,
    height: 20,
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
        fontFamily: 'Raleway',
        letterSpacing: 0,
        textAlign: "center",
        color: '#da291c'
    },
    manage: {
        fontFamily: "Raleway",
        fontSize: 34,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 38,
        letterSpacing: 0,
        textAlign: "center",
        color: "#ffffff",
        paddingTop: 25,
    },
    footer: {
        minHeight: 63,
        maxHeight: 63,
        flex: 1
    }
});
