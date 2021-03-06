import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Linking, Platform, TouchableOpacity} from 'react-native';
import {NavigationScreenProps} from 'react-navigation';
import BaseFooter from '../../shared/footer'
import {HEADERSTYLEBLUE, HEADERTITLESTYLEWHITE} from '../../shared/fonts';
import {createOpenLink} from 'react-native-open-maps';
import {setStatusBar} from "../../shared/status-bar";
import {GlobalCoordinates} from "../../shared/global";

export interface FindUscreenProps extends NavigationScreenProps {
}

Platform.select({ios: 'maps:0,0?q=', android: 'geo:0,0?q='});
export default class FindUs extends React.Component <FindUscreenProps, {}> {

    static navigationOptions = {
        title: 'FIND US',
        headerStyle: HEADERSTYLEBLUE,
        headerTitleStyle: HEADERTITLESTYLEWHITE
    };

    constructor(props: Readonly<FindUscreenProps>) {
        super(props);
        setStatusBar(this, "#1c5ca3", 'light-content');
    }

    render() {
        const rmhcPhoneNumber = "tel:614-227-3700"
        const rmhcEmail = "mailto:rmhccommunications@rmhc-centralohio.org"

        return (
            <View style={styles.main}>
                <View style={{flex: 0.3, marginLeft: '4%'}}>
                    <View style={styles.container}>
                        <Text style={styles.locationTextMain}>Ronald McDonald House {"\n"}Charities Central OH</Text>
                        <Text style={styles.locationTextSub}>711 E Livingston Ave.{"\n"}Columbus, OH 43205</Text>
                        <Text style={styles.locationLinkStyle}
                              onPress={() => Linking.openURL(rmhcPhoneNumber)}>614-227-3700</Text>
                        <Text style={styles.locationLinkStyle}
                              onPress={() => Linking.openURL(rmhcEmail)}>rmhccommunications@rmhc-centralohio.org</Text>

                    </View>

                </View>
                <View style={{flex: 0.7, marginLeft: '1%', width: '98%'}}>
                    <TouchableOpacity onPress={createOpenLink({
                        latitude: GlobalCoordinates.latitude,
                        longitude: GlobalCoordinates.longitude,
                        query: "Ronald McDonald House Charities of Central Ohio"
                    })}>
                        <ImageBackground source={require('./assets/findusmap.png')}
                                         imageStyle={{resizeMode: 'stretch', overflow: 'visible'}}
                                         style={{width: '100%', height: '100%'}}/>
                    </TouchableOpacity>

                </View>
                <View style={{flex: 0.1}}>
                    <BaseFooter navigation={this.props.navigation}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',

        paddingBottom: 0
    },
    container: {flex: 1, top: '5%', width: '100%'},
    locationTextMain: {

        fontFamily: 'Raleway-Regular',
        fontSize: 20,
        fontWeight: "600",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "left",
        color: '#000000'

    },
    locationTextSub: {
        fontFamily: 'Raleway-Regular',
        fontSize: 16,
        fontWeight: "600",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "left",
        color: '#999999'
    },
    locationLinkStyle: {
        fontFamily: 'Raleway-Regular',
        color: "#0078d7",
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0,
        marginTop: 10
    }
});
