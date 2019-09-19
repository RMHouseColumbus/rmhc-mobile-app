import React from 'react';
import {Linking, StatusBar, View, StyleSheet, GestureResponderEvent, TextStyle, ViewStyle} from 'react-native';
import {NavigationScreenProps} from "react-navigation";


import CareMobile from "../assets/caremobile.svg";
import FamilyRoom from "../assets/familyroom.svg";
import Share from "../assets/share.svg";
import Staff from "../assets/staff.svg";
import StayInvolved from "../assets/stayinvolved.svg";
import {SVGButton} from "../../svg-button/SVGButton";
import BaseScrollablePage from "../../shared/ScrollablePage";
import { HEADERSTYLEWHITE, HEADERTITLESTYLEBLACK } from '../../shared/fonts';
import {setStatusBar} from "../../shared/status-bar";

export interface AboutProps extends NavigationScreenProps {
}

export interface AboutState {
    links: any
}

export interface SVGButtonInterface {
    route?: string
    onPress?: (event: GestureResponderEvent) => void;
    text: string
    svg: JSX.Element,
    tOverride?: TextStyle,
    bOverride?: ViewStyle
}

export default class About extends React.Component <AboutProps, AboutState> {

    static navigationOptions = {
        title: "ABOUT",
        headerStyle: HEADERSTYLEWHITE,
        headerTitleStyle: HEADERTITLESTYLEBLACK
    };

    public constructor(props) {
        super(props);
        this.state = {
            links: {}
        };
        setStatusBar(this, "#ffffff", 'dark-content');
    }

    onContentLoad = (content: any) => {
        this.setState({
            links: content.links
        })
    };

    

buttons(): SVGButtonInterface[] {

    const state = this.state;
    const textOverride = {paddingTop: 8, fontSize: 27, lineHeight: 41};
    const buttonOverride = {};

    return [
        {
            text: "Meet The Staff",
            onPress: () => Linking.openURL(state.links.meetstaff.url),
            svg: <Staff {...SVG}/>,
            tOverride: textOverride,
            bOverride: buttonOverride
        },
        {
            route: "CareMobile",
            text: "Care\nMobile",
            svg: <CareMobile {...SVG}/>,
            tOverride: textOverride,
            bOverride: buttonOverride
        },
        {
            route: "StayInvolved",
            text: "Ways To Stay Involved",
            svg: <StayInvolved {...SVG}/>,
            tOverride: textOverride,
            bOverride: buttonOverride
        },
        {
            text: "Share Your Story",
            onPress: () => Linking.openURL(state.links.sharestory.url),
            svg: <Share {...SVG}/>,
            tOverride: textOverride,
            bOverride: buttonOverride
        },
        {
            route: "FamilyRoom",
            text: "Family Room",
            svg: <FamilyRoom {...SVG}/>,
            tOverride: textOverride,
            bOverride: buttonOverride
        }

    ];
}


    viewFunction = () => {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#fff" barStyle="dark-content"/>
                {
                    this.buttons().map(b => {
                        const press = b.onPress ? b.onPress : () => this.props.navigation.navigate(b.route);
                        return (
                            <SVGButton text={b.text} onPress={press} textOverride={b.tOverride} buttonOverride={b.bOverride}>
                                {
                                    b.svg
                                }
                            </SVGButton>
                        )
                    })
                }
            </View>
        )
    };


    render() {
        return (
            <BaseScrollablePage contentLoad={"about"}
                                onContentLoad={this.onContentLoad}
                                contentView={this.viewFunction}
                                navigation={this.props.navigation}/>
        );
    }
}


const SVG = {
    Width: 200,
    Height: 52,
    zIndex: -100
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#4872ae"
    },
});
