import React from 'react';
import {ScrollView, StatusBar, StyleSheet, View, Linking} from 'react-native';
import BaseFooter from '../../shared/footer'
import {NavigationNavigatorProps} from "react-navigation";


import CareMobile from "../assets/caremobile.svg";
import FamilyRoom from "../assets/familyroom.svg";
import Share from "../assets/share.svg";
import Staff from "../assets/staff.svg";
import StayInvolved from "../assets/stayinvolved.svg";
import {SVGButton} from "../../svg-button/SVGButton";
import {ContentService} from "../../../services/ContentService";


const SVG = {
    // alignSelf: 'flex-end',
    Width: 200,
    Height: 52,
    // marginBottom: spacing[4]
};

export interface AboutState {
    isLoading: boolean,
    content: any
}

export interface AboutProps extends NavigationNavigatorProps {
    navigation: any
}

export default class About extends React.Component <AboutProps,AboutState>  {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            content: []
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


    componentDidMount(): void {
        ContentService.contentForPage("about")
            .then((result) => {
                    this.setState({
                        isLoading: false,
                        content: result.content.links.sharestory
                    })
                }
            )
    }

    render() {
        const link = this.state.content.url;
        return (
            <ScrollView style={styles.main}>
                <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content"/>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={styles.container}>
                        <SVGButton text={"Meet the Staff"} onPress={() => this.props.navigation.navigate("Delivery")}>
                            <Staff {...SVG}/>
                        </SVGButton>
                        <SVGButton text={"Care Mobile"}
                                   onPress={() => this.props.navigation.navigate("CareMobile")}>
                            <CareMobile {...SVG}/>
                        </SVGButton>
                        <SVGButton text={"Ways to Stay Involved"} onPress={() => this.props.navigation.navigate("StayInvolved")}>
                            <StayInvolved {...SVG}/>
                        </SVGButton>
                        <SVGButton text={"Share Your Story"}
                                   onPress={() => Linking.openURL(link)}>
                            <Share {...SVG}/>
                        </SVGButton>
                        <SVGButton text={"Family Room"}
                                   onPress={() => this.props.navigation.navigate("Transportation")}>
                            <FamilyRoom {...SVG}/>
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
