import React from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import BaseFooter from '../base/footer.js'


import Delivery from "./delivery.svg";
import Restaurants from "./restaurants.svg";
import MedCare from "./medcare.svg";
import Shopping from "./shoppping.svg";
import ToDo from "./toDo.svg";
import Transportation from "./transporation.svg";

import {SVGButton} from "../svg-button/SVGButton";
import {spacing} from "../shared/spacing";


const SVG = {
    // alignSelf: 'flex-end',
    Width: 200,
    Height: 52,
    // marginBottom: spacing[4]
};

export default class Neighborhood extends React.Component {

    static navigationOptions = {
        title: "Neighborhood",
        headerStyle: {
            backgroundColor: '#FFFFFF',
        },
        headerTitleStyle: {
            color: '#000000',
            fontFamily: "System",
            fontSize: 35,

        }
    };

    render() {
        return (
            <ScrollView style={styles.main}>
                <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content"/>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={styles.container}>
                        <SVGButton text={"Food Delivery"} onPress={() => this.props.navigation.navigate("Delivery")} >
                            <Delivery {...SVG}/>
                        </SVGButton>
                        <SVGButton text={"Area Restaurants"} onPress={() => this.props.navigation.navigate("Restaurants")} >
                            <Restaurants {...SVG}/>
                        </SVGButton>
                        <SVGButton text={"Shopping"}  onPress={() => this.props.navigation.navigate("Shopping")}>
                            <Shopping {...SVG}/>
                        </SVGButton>
                        <SVGButton text={"Things to Do in Columbus"} onPress={() => this.props.navigation.navigate("ThingsToDo")}>
                            <ToDo {...SVG}/>
                        </SVGButton>
                        <SVGButton text={"Transportation"} onPress={() => this.props.navigation.navigate("Transportation")}>
                            <Transportation {...SVG}/>
                        </SVGButton>
                        <SVGButton text={"Adult Medical Care"} onPress={() => this.props.navigation.navigate("AdultCare")}>
                            <MedCare {...SVG}/>
                        </SVGButton>
                    </View>
                    <View style={{flex: .1}}>
                        <BaseFooter navigation={this.props.navigation}/>
                    </View>
                </View>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        // flex: 1, backgroundColor: "red"
    },
    container: {
        flex: 15,
        padding: 20,
        backgroundColor: "#4872ae"
    },
    welcomeText: {
        fontFamily: "System",
        fontSize: 45,
        color: 'black'
    }
});
