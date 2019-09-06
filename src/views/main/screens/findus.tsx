import React from 'react';
import { StyleSheet, Text, View, StatusBar, ImageBackground, Linking, Platform } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import BaseFooter from '../../shared/footer'
import {HEADERSTYLEBLUE, HEADERTITLESTYLEWHITE} from '../../shared/fonts';

export interface FindUscreenProps extends NavigationScreenProps {
}Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });export default class FindUs extends React.Component <FindUscreenProps,{}> {

    static navigationOptions = {
        title: 'Find Us',
        headerStyle: HEADERSTYLEBLUE,
        headerTitleStyle: HEADERTITLESTYLEWHITE
    }
    render() {
        const lat = "39.951073"
        const long = "-82.978959" 
        const rmhcPhoneNumber = "tel:614-227-3700"
        const rmhcEmail = "mailto:rmhccommunications@rmhc-centralohio.org"
        const rmhcGeoCoordinates = Platform.select({ ios: 'maps:'+lat+','+long, android: 'geo:'+lat+','+long });
        return (
            <View style={styles.main}>
                
                <StatusBar backgroundColor="#4872ae" barStyle="dark-content" style={{color:"#FFFFFF"}}/>

                <View style={{ flex: 0.4, marginLeft:'2%'}}>
                    <View style={styles.container}>
                        <Text style={styles.locationTextMain}>Ronald McDonald House {"\n"}Charities Central OH</Text>
                        <Text style={styles.locationTextSub}>711 E Livingston Ave.{"\n"}Columbus, OH 43205</Text>
                        <Text style={styles.locationLinkStyle} onPress={() => Linking.openURL(rmhcPhoneNumber)}>614-227-3700</Text>
                        <Text style={styles.locationLinkStyle} onPress={() => Linking.openURL(rmhcEmail)}>rmhccommunications@rmhc-centralohio.org</Text>
                        <Text style={styles.locationLinkStyle} onPress={() => Linking.openURL(rmhcGeoCoordinates)}>Go to Maps</Text>
                    </View>
                
                </View>
                <View style={{flex:0.6, marginLeft:'1%',width:'98%'}}>
                        <ImageBackground source={require('./assets/findusmap.png')} imageStyle={{resizeMode: 'stretch', overflow:'visible'}} style={{width: '100%', height: '100%'}} />
                </View>
                <View style={{ flex: 0.1}}>
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
        
        paddingBottom: 0
    },
    container: {flex:1, top:'5%', width:'80%'},
    locationTextMain: {
        
        
        fontSize: 20,
        fontWeight: "600",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "left",
        color: '#000000'
        
    },
    locationTextSub:{
            fontSize: 16,
            fontWeight: "600",
            fontStyle: "normal",
            letterSpacing: 0,
            textAlign: "left",
            color: '#999999'
    },
    locationLinkStyle:{
    color: "#0078d7",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
    marginTop: 10
    }
});
