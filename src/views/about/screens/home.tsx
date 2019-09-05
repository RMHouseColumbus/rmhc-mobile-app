import React from 'react';
import {Linking, StyleSheet, View} from 'react-native';
import {NavigationScreenProps} from "react-navigation";


import CareMobile from "../assets/caremobile.svg";
import FamilyRoom from "../assets/familyroom.svg";
import Share from "../assets/share.svg";
import Staff from "../assets/staff.svg";
import StayInvolved from "../assets/stayinvolved.svg";
import {SVGButton} from "../../svg-button/SVGButton";
import BaseScrollablePage from "../../base-page/ScrollablePage";


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
        title: "About",
        headerStyle: {
            backgroundColor: '#FFFFFF',
        },
        headerTitleStyle: {
            color: '#000000',
            fontFamily: "System",
            fontSize: 25,
        }
    };


    onContentLoad = (content: any) => {
        this.setState({
            content: content
        })
    };

    viewFunction = () => {
        const link = this.state.content.links.sharestory.url;
        return (
            <View style={styles.container}>
                <SVGButton text={"Meet the Staff"} onPress={() => this.props.navigation.navigate("Staff")}>
                    <Staff {...SVG}/>
                </SVGButton>
                <SVGButton text={"Care Mobile"}
                           onPress={() => this.props.navigation.navigate("CareMobile")}>
                    <CareMobile {...SVG}/>
                </SVGButton>
                <SVGButton text={"Ways to Stay Involved"}
                           onPress={() => this.props.navigation.navigate("StayInvolved")}>
                    <StayInvolved {...SVG}/>
                </SVGButton>
                <SVGButton text={"Share Your Story"}
                           onPress={() => Linking.openURL(link)}>
                    <Share {...SVG}/>
                </SVGButton>
                <SVGButton text={"Family Room"}
                           onPress={() => this.props.navigation.navigate("FamilyRoom")}>
                    <FamilyRoom {...SVG}/>
                </SVGButton>
            </View>
        )
    };


    render() {
        return (
            <BaseScrollablePage contentLoad={"about"} onContentLoad={this.onContentLoad} contentView={this.viewFunction}
                                navigation={this.props.navigation}/>
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
