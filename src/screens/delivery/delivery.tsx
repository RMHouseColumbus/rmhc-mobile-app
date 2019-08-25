import React from 'react';
import { Text, TextStyle, View, ViewStyle } from "react-native"
import { spacing } from "../../components/shared/spacing";
import { Header } from "../../components/header/header";

const FULL: ViewStyle = { flex: 1 };

const CONTENT = {
    heading: "Find restaurants that deliver by carrier:",
    carriers: [
        {
            id: 0,
            name: "DoorDash",
            url: "https://www.doordash.com/food-delivery"
        },
        {
            id: 1,
            name: "UberEats",
            url: "https://www.ubereats.com/en-US/"
        },
        {
            id: 2,
            name: "GrubHub",
            url: "https://www.grubhub.com/"
        }
    ]
};


export default class Delivery extends React.Component {

    static navigationOptions = {
        title: 'DELIVERY',
    };


    render() {
        return (
            <View style={FULL}>
                <View>
                    <Header headerText={CONTENT.heading} titleStyle={TITLE} leftIcon={'back'}/>
                    <View>
                        {
                            CONTENT.carriers.map(c => {
                                return (
                                    this.carrierRow(c)
                                )
                            })
                        }
                    </View>
                </View>
            </View>
        );
    }

    private carrierRow(c: any) {
        return (
            <View key={c.id}>
                <Text>{c.name}</Text>
                <Text>{c.url}</Text>
            </View>
        )
    }
}

const BOLD: TextStyle = { fontWeight: "bold" };

const TITLE: TextStyle = {
    ...BOLD,
    fontSize: 15,
    lineHeight: 38,
    textAlign: "center",
    marginBottom: spacing[5],
};

