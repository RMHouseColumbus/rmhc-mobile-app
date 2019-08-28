import React from 'react';
import { Text, TextStyle, View, ViewStyle, StatusBar, TouchableOpacity } from "react-native"
import { NavigationScreenProp } from 'react-navigation'
import { spacing } from "../../components/shared/spacing";
import { Header } from "../../components/header/header";
import BaseFooter from '../../components/base/footer.js'

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

export interface DeliveryScreenProps {
    navigation: NavigationScreenProp<any,any>
  };

export default class Delivery extends React.Component<DeliveryScreenProps, object> {

    static navigationOptions = {
        title: 'DELIVERY',
    };
    render() {
        return (
            <View style={FULL}>
                <StatusBar backgroundColor="#4872ae" barStyle="dark-content" />
                <View>
                    <Header headerText={CONTENT.heading} titleStyle={TITLE}/>
                    <TouchableOpacity style={{ height: 50 }} onPress={() => this.props.navigation.navigate("Neighborhood")}>
                            <Text>Back</Text>
                        </TouchableOpacity>
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
                <BaseFooter navigation={this.props}/>
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

