import React from 'react';
import {ScrollView, StatusBar, StyleSheet, View, Linking} from 'react-native';
import BaseFooter from '../../shared/footer'
import {ContentService} from "../../../services/ContentService";


import Delivery from "../assets/delivery.svg";
import Restaurants from "../assets/restaurants.svg";
import Shopping from "../assets/shoppping.svg";
import ToDo from "../assets/toDo.svg";
import Transportation from "../assets/transporation.svg";

import {SVGButton} from "../../svg-button/SVGButton";
import { NavigationScreenProps } from "react-navigation"


const SVG = {
    // alignSelf: 'flex-end',
    Width: 200,
    Height: 52,
    // marginBottom: spacing[4]
};

export interface NeighborhoodNavigationProps extends NavigationScreenProps {
}

export interface NeighborhoodState {
    links: any
}


export default class Neighborhood extends React.Component<NeighborhoodNavigationProps, NeighborhoodState> {

    static navigationOptions = {
        title: "Neighborhood",
        headerStyle: {
            backgroundColor: '#FFFFFF',
        },
        headerTitleStyle: {
            color: '#000000',
            fontFamily: "System",
            fontSize: 20,
        }
    };

    public constructor(props) {
        super(props);
        this.state = {
           
            links:{}
        }
    }

    componentDidMount(): void {
        ContentService.contentForPage("neighborhood")
            .then((result) => {
                    this.setState({
                        links: result.content.links
                    })
                }
            )
    }

    render() {
        return (
            <View style={{flex: 10}}>
                <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content"/>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <ScrollView style={styles.container}>
                        <SVGButton text={"Food Delivery"} onPress={() => this.props.navigation.navigate("Delivery")}>
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
