import React from 'react';
import {View} from 'react-native';
import {NavigationScreenProps} from "react-navigation";
import Before from "../assets/before.svg"
import During from "../assets/during.svg"
import After from "../assets/after.svg"

import {SVGButton} from "../../svg-button/SVGButton";
import BaseScrollablePage from "../../shared/ScrollablePage";
import Henry from "../assets/henry_faq.svg"
import {HEADERSTYLEWHITE, HEADERTITLESTYLEBLACK} from '../../shared/fonts';
import {setStatusBar} from "../../shared/status-bar";

const SVG = {
    Width: 200,
    Height: 52,
};

export interface FAQNavigationScreenProps extends NavigationScreenProps {
}

export default class Faq extends React.Component <FAQNavigationScreenProps, {}> {

    static navigationOptions = {
        title: "FAQs",
        headerStyle: HEADERSTYLEWHITE,
        headerTitleStyle: HEADERTITLESTYLEBLACK
    };

    constructor(props: Readonly<FAQNavigationScreenProps>) {
        super(props);
        setStatusBar(this, "#ffffff", 'dark-content');
    }

    viewFunction = () => {
        return (
            <View style={{padding: 20, backgroundColor: "#4872ae", flexDirection: 'column-reverse'}}>
                <Henry width={375} height={375} style={{flex: 1}}/>
                <View style={{flex: 2}}>
                    <SVGButton
                        text={"Before\nYour Stay"}
                        textOverride={{paddingTop: 19, fontSize: 27, lineHeight: 41}}
                        buttonOverride={{paddingRight: 30, paddingTop:19, paddingBottom: 19}}
                        onPress={() => this.props.navigation.navigate("Before")}
                    >
                        <Before {...SVG}/>
                    </SVGButton>
                    <SVGButton
                        text={"During\nYour Stay"}
                        textOverride={{paddingTop: 19, fontSize: 27, lineHeight: 41}}
                        buttonOverride={{paddingRight: 30, paddingTop:19, paddingBottom: 19}}
                        onPress={() => this.props.navigation.navigate("During")}
                    >
                        <During {...SVG}/>
                    </SVGButton>

                    <SVGButton
                        text={"After\nYour Stay"}
                        textOverride={{paddingTop: 19, fontSize: 27, lineHeight: 41}}
                        buttonOverride={{paddingRight: 30, paddingTop:19, paddingBottom: 19}}
                        onPress={() => this.props.navigation.navigate("After")}
                    >
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
