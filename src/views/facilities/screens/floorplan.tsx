import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Pdf from 'react-native-pdf';
import BaseFooter from '../../shared/footer'


import { NavigationScreenProps } from "react-navigation";
import { HEADERSTYLEBLUE, HEADERTITLESTYLEWHITE } from '../../shared/fonts';
import {setStatusBar} from "../../shared/status-bar";

export interface FloorPlanNavigationScreenProps extends NavigationScreenProps {}

export default class FloorPlan extends React.Component<FloorPlanNavigationScreenProps, {}> {

    constructor(props: Readonly<FloorPlanNavigationScreenProps>) {
        super(props);
        setStatusBar(this, "#1c5ca3", 'light-content');
    }

    static navigationOptions = {
        title: 'FloorPlan',
        headerStyle: HEADERSTYLEBLUE,
        headerTitleStyle: HEADERTITLESTYLEWHITE
    };

    render() {
        const source = require('../assets/floorplan.pdf');
        return (
            <View style={styles.main}>
                <View style={{ flex: 0.9 }}>
                    <Pdf source={source} style={styles.pdf} />
                </View>
                <View style={styles.footer}>
                    <BaseFooter navigation={this.props.navigation} />
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
    pdf: {
        flex: 1,
        width: Dimensions.get('window').width,
    },
    footer: {
        minHeight: 63,
        maxHeight: 63,
        flex: 0.1
    }
});
