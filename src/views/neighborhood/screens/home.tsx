import React from 'react';
import {Linking, StyleSheet, View, Dimensions} from 'react-native';


import Delivery from "../assets/delivery.svg";
import Restaurants from "../assets/restaurants.svg";
import Shopping from "../assets/shoppping.svg";
import ToDo from "../assets/toDo.svg";
import Transportation from "../assets/transporation.svg";

import {SVGButton} from "../../svg-button/SVGButton";
import {NavigationScreenProps} from "react-navigation"
import BaseScrollablePage from "../../base-page/ScrollablePage";

import { HEADERSTYLEWHITE, HEADERTITLESTYLEBLACK } from '../../shared/fonts';

export interface NeighborhoodNavigationProps extends NavigationScreenProps {
}

export interface NeighborhoodState {
    links: any
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
        }
    }

    onContentUpdate = (content: any) => {

        this.setState({
            links: content.links
        })
    };

    viewFunction = () => {
        return (
            <View style={styles.container}>
                <SVGButton text={"Food\nDelivery"} onPress={() => this.props.navigation.navigate("Delivery")}>
                    <Delivery {...SVG}/>
                </SVGButton>
                <SVGButton text={"Area Restaurants"}
                           onPress={() => this.props.navigation.navigate("Restaurants")}>
                    <Restaurants {...SVG}/>
                </SVGButton>
                <SVGButton text={"Shopping"} onPress={() => this.props.navigation.navigate("Shopping")}>
                    <Shopping {...SVG}/>
                </SVGButton>
                <SVGButton text={"Things to Do in Columbus"}
                           onPress={() => Linking.openURL(this.state.links.thingstodo.url)}>
                    <ToDo {...SVG}/>
                </SVGButton>
                <SVGButton text={"Transportation"}
                           onPress={() => this.props.navigation.navigate("Transportation")}>
                    <Transportation {...SVG}/>
                </SVGButton>
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
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#4872ae"
    },
});
