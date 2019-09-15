import React from 'react';
import {Linking, View} from 'react-native';
import {NavigationScreenProps} from "react-navigation";


import CareMobile from "../assets/caremobile.svg";
import FamilyRoom from "../assets/familyroom.svg";
import Share from "../assets/share.svg";
import Staff from "../assets/staff.svg";
import StayInvolved from "../assets/stayinvolved.svg";
import {SVGButton} from "../../svg-button/SVGButton";
import BaseScrollablePage from "../../shared/ScrollablePage";
import { HEADERSTYLEWHITE, HEADERTITLESTYLEBLACK } from '../../shared/fonts';


const SVG = {
    Width: 200,
    Height: 52
};

export interface AboutState {
    content: any
}

export interface AboutProps extends NavigationScreenProps {
}

export default class About extends React.Component <AboutProps, AboutState> {

    constructor(props) {
        super(props);
        this.state = {
            content: {
                links: {
                    sharestory: {
                        url: ""
                    }
                }
            }
        }

    }

    static navigationOptions = {
        title: "ABOUT",
        headerStyle: HEADERSTYLEWHITE,
        headerTitleStyle: HEADERTITLESTYLEBLACK
    };


    onContentLoad = (content: any) => {
        this.setState({
            content: content
        })
    };

    viewFunction = () => {
        const link = this.state.content.links.sharestory.url;
        return (
            <View style={{padding: 20, backgroundColor: "#4872ae"}}>
                <SVGButton text={"Meet the\nStaff"} onPress={() => Linking.openURL("http://rmhc-centralohio.org/who-we-are/staff/")}>
                    <Staff {...SVG}/>
                </SVGButton>
                <SVGButton text={"Care\nMobile"}
                           onPress={() => this.props.navigation.navigate("CareMobile")}>
                    <CareMobile {...SVG}/>
                </SVGButton>
                <SVGButton text={"Ways to\nStay Involved"}
                           onPress={() => this.props.navigation.navigate("StayInvolved")}>
                    <StayInvolved {...SVG}/>
                </SVGButton>
                <SVGButton text={"Share Your\nStory"}
                           onPress={() => Linking.openURL(link)}>
                    <Share {...SVG}/>
                </SVGButton>
                <SVGButton text={"Family\nRoom"}
                           onPress={() => this.props.navigation.navigate("FamilyRoom")}>
                    <FamilyRoom {...SVG}/>
                </SVGButton>
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
