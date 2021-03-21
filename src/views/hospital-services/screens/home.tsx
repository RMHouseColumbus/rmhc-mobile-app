import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Card, CardItem } from 'native-base'
import { NavigationScreenProps, getActiveChildNavigationOptions } from "react-navigation";
import g from '../../styles/global';
import BaseScrollablePage from "../../shared/ScrollablePage";
import { HEADERSTYLEWHITE } from '../../shared/fonts';
import { setStatusBar } from "../../shared/status-bar";
import { titleStyle } from "../screens/styles";

export interface HospitalServiceProps extends NavigationScreenProps {
}

export interface HospitalServiceState {
    // links: any

}

export interface CardItemInterface {

    route: string,
    text: string,
    title: string
}

const HOME_PAGE = "http://rmhc-centralohio.org/";

export default class HostipalServices extends React.Component<HospitalServiceProps, HospitalServiceState> {

    static navigationOptions = {
        title: "IN HOSPITAL SERVICES",
        headerStyle: HEADERSTYLEWHITE,
        headerTitleStyle: titleStyle
    };

    public constructor(props) {
        super(props);
        this.state = {
            //   links: {}
        };
        setStatusBar(this, "#ffffff", 'dark-content');
    }

    onContentLoad = (content: any) => {
        console.log(content)
        this.setState({
            // links: content.links
        })
    };



    cards(): CardItemInterface[] {
        return [
            {
                title: "OhioHealth Riverside\nMethodist Hospital",
                text: "Ronald McDonald family rooms at OhioHealth Riverside Methodist Hospital",
                route: "RiversideFamilyRoom"

            },
            {
                title:"Nationwide Children’s\nHospital Big Lots\nBehavioral Health Pavilion",
                text: "Ronald McDonald family rooms at the Nationwide Children’s Hospital Big Lots Behavioral Health Pavilion",
                route: "BHPFamilyRoom"
            }

        ];
    }


    viewFunction = () => {
        return (
            <View style={styles.container}>
                {
                    this.cards().map((item, index) => {
                        return (
                            <Card key={index} style={main.card}>
                                <CardItem bordered key={index} style={main.cardItem} >
                                    <View>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate({routeName: item.route})}>
                                        <Text style={g.textTitle} numberOfLines={3}>{item.title}</Text>
                                        <Text style={g.textContent}>{item.text}</Text>
                                    </TouchableOpacity>    
                                    </View>
                                </CardItem>
                            </Card>
                        )
                    })
                }
            </View>
        )
    };


    render() {
        return (

            <BaseScrollablePage contentLoad={"HospitalService"}
                onContentLoad={this.onContentLoad}
                contentView={this.viewFunction}
                navigation={this.props.navigation} />
        );
    }
}


const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#4872ae"
    },
});

const main = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        fontFamily: "Raleway-Regular",
        fontSize: 20,
        color: 'black'
    },
    body: { flex: 10, backgroundColor: "#638dc9" },
    card: {
        width: "98%",
        borderRadius:15
    },
    cardItem: {
        borderRadius:15
      
    },

});

