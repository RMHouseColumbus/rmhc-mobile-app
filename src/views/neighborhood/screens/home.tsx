import React from 'react';
import {GestureResponderEvent, Linking, StatusBar, StyleSheet, TextStyle, View, ViewStyle} from 'react-native';


import Delivery from "../assets/delivery.svg";
import Restaurants from "../assets/restaurants.svg";
import Shopping from "../assets/shoppping.svg";
import ToDo from "../assets/toDo.svg";
import Transportation from "../assets/transporation.svg";

import {SVGButton} from "../../svg-button/SVGButton";
import {NavigationScreenProps} from "react-navigation"
import BaseScrollablePage from "../../shared/ScrollablePage";

import {HEADERSTYLEWHITE, HEADERTITLESTYLEBLACK} from '../../shared/fonts';
import {setStatusBar} from "../../shared/status-bar";

export interface NeighborhoodNavigationProps extends NavigationScreenProps {
}

export interface NeighborhoodState {
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

export default class Neighborhood extends React.Component<NeighborhoodNavigationProps, NeighborhoodState> {

    static navigationOptions = {
        title: "NEIGHBORHOOD",
        headerStyle: HEADERSTYLEWHITE,
        headerTitleStyle: HEADERTITLESTYLEBLACK
    };

    public constructor(props) {
        super(props);
        this.state = {
            links: {}
        };
        setStatusBar(this, "#ffffff");
    }

    onContentUpdate = (content: any) => {

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
                route: "Delivery",
                text: "Food\nDelivery",
                svg: <Delivery {...SVG}/>,
                tOverride: {...textOverride, paddingBottom: 0},
                bOverride: buttonOverride
            },
            {
                text: "Area Restaurants",
                route: "Restaurants",
                svg: <Restaurants {...SVG}/>,
                tOverride: textOverride,
                bOverride: buttonOverride
            },
            {
                route: "Shopping",
                text: "Retail\nShopping",
                svg: <Shopping {...SVG}/>,
                tOverride: textOverride,
                bOverride: buttonOverride
            },
            {
                text: "Things to Do\nIn Columbus",
                onPress: () => Linking.openURL(state.links.thingstodo.url),
                svg: <ToDo {...SVG}/>,
                tOverride: textOverride,
                bOverride: buttonOverride
            },
            {
                route: "Transportation",
                text: "Transportation",
                svg: <Transportation {...SVG}/>,
                tOverride: {...textOverride},
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
                            <SVGButton text={b.text} onPress={press} textOverride={b.tOverride}
                                       buttonOverride={b.bOverride}>
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
            <BaseScrollablePage contentLoad={"neighborhood"} onContentLoad={this.onContentUpdate}
                                contentView={this.viewFunction} navigation={this.props.navigation}/>
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
