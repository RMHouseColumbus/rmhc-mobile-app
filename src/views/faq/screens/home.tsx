import React from 'react';
import {ScrollView, StatusBar, View, StyleSheet} from 'react-native';
import BaseFooter from '../../shared/footer'
import { NavigationScreenProps } from "react-navigation";
import Before from "../assets/before.svg"
import During from "../assets/during.svg"
import After from "../assets/after.svg"

import {SVGButton} from "../../svg-button/SVGButton";

const SVG = {
    // alignSelf: 'flex-end',
    Width: 200,
    Height: 52,
    // marginBottom: spacing[4]
};

export interface FAQNavigationScreenProps extends NavigationScreenProps {}

export default class Faq extends React.Component <FAQNavigationScreenProps, {}> {

    static navigationOptions = {
        title: "FAQ",
        headerStyle: {
            backgroundColor: '#FFFFFF',
        },
        headerTitleStyle: {
            color: '#000000',
            fontFamily: "System",
            fontSize: 25,
        }
    };


    render() {
        return (
            <View style={{flex: 10}}>
                <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content"/>
                <View style={{flex: 1, flexDirection: 'column'}}>
                    <ScrollView style={styles.main}>
                        <View style={styles.container}>
                            <SVGButton text={"Before You Stay"} onPress={() => this.props.navigation.navigate("Before")}>
                                <Before {...SVG}/>
                            </SVGButton>
                            <SVGButton text={"During Your Stay"} onPress={() => this.props.navigation.navigate("During")}>
                                <During {...SVG}/>
                            </SVGButton>

                            <SVGButton text={"After Your Stay"} onPress={() => this.props.navigation.navigate("After")}>
                                <After {...SVG}/>
                            </SVGButton>
                        </View>
                    </ScrollView>
                </View>
                
                <BaseFooter navigation={this.props.navigation}/>
            </View>
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
