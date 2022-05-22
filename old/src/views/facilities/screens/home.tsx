import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {Button} from 'native-base';
import BaseFooter from '../../shared/footer'
import {NavigationScreenProps} from "react-navigation";
import {HEADERSTYLEBLUE, HEADERTITLESTYLEWHITE} from '../../shared/fonts';
import {setStatusBar} from "../../shared/status-bar";


export interface FacilitiesNavigationScreenProps extends NavigationScreenProps {
}

export default class Facilities extends React.Component<FacilitiesNavigationScreenProps, {}> {
    static navigationOptions = {
        title: 'FACILITIES',
        headerStyle: HEADERSTYLEBLUE,
        headerTitleStyle: HEADERTITLESTYLEWHITE
    };

    constructor(props: Readonly<FacilitiesNavigationScreenProps>) {
        super(props);
        setStatusBar(this, "#1c5ca3", 'light-content');
    }

    render() {
        return (
            <View style={styles.main}>
                <View style={{flex: 0.9}}>
                    <ImageBackground source={require('../assets/floorplan_bckgrd.png')}
                                     style={{width: '100%', height: '100%'}}/>
                    <View style={styles.floorPlanBackground}/>
                    <View style={styles.floorPlanTextContainer}>
                        <Text style={styles.floorPlanText}>FLOOR PLAN</Text>
                        <Button style={styles.floorPlanButton}
                                onPress={() => this.props.navigation.navigate("FloorPlan")}>
                            <Text style={styles.TextStyle}>View PDF</Text>
                        </Button>
                    </View>
                </View>
                <View style={styles.footer}>
                    <BaseFooter navigation={this.props.navigation}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1, backgroundColor: "#F1F1F1"
    },
    container: {
        flex: 1,
        marginLeft: 20,
        top: 50
    },
    welcomeText: {
        fontFamily: "Raleway-Regular",
        fontSize: 45,
        color: 'black'
    },
    floorPlanBackground: {
        borderColor: 'black',
        borderWidth: 5,
        width: '60%',
        height: '37%',
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        top: '35%',
        left: '20%',
        opacity: 0.85
    },
    floorPlanTextContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        position: 'absolute',
        top: '39%',
        left: '34%'
    },
    floorPlanText: {
        fontSize: 35,
        fontFamily: 'Raleway-Bold',
        fontWeight: "bold",
        textAlign: 'center',
        justifyContent: 'center',
    },
    floorPlanButton: {
        top: '23%',
        textAlign: 'center',
        justifyContent: 'center',
        width: 120,
        borderRadius: 10,
        backgroundColor: '#FCC300',

    },
    TextStyle: {
        color: '#000000',
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'Raleway-Regular'
    },
    footer: {
        flex: 0.1,
        minHeight: 63,
        maxHeight: 63,
    }
});
