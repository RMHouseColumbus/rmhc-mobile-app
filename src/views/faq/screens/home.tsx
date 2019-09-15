import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationScreenProps} from "react-navigation";
import Before from "../assets/before.svg"
import During from "../assets/during.svg"
import After from "../assets/after.svg"

import {SVGButton} from "../../svg-button/SVGButton";
import BaseScrollablePage from "../../base-page/ScrollablePage";
import Henry from "../assets/henry_faq.svg"
import { HEADERSTYLEWHITE, HEADERTITLESTYLEBLACK } from '../../shared/fonts';

const SVG = {
    // alignSelf: 'flex-end',
    Width: 200,
    Height: 52,
    // marginBottom: spacing[4]
};

export interface FAQNavigationScreenProps extends NavigationScreenProps {
}

export default class Faq extends React.Component <FAQNavigationScreenProps, {}> {

    static navigationOptions = {
        title: "FAQs",
        headerStyle: HEADERSTYLEWHITE,
        headerTitleStyle: HEADERTITLESTYLEBLACK
    };

    viewFunction = () => {
        return (
            <View style={{padding: 20, backgroundColor: "#4872ae", flexDirection: 'column-reverse'}}>
                <Henry width={375} height={375} style={{flex: 1}}/>
                <View style={{flex: 2}}>
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
            </View>
        )
    };


    render() {
        return (
            <BaseScrollablePage
                contentView={this.viewFunction}
                navigation={this.props.navigation}
            />
        );
    }
}
