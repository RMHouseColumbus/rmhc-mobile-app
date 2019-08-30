import React from 'react';
import {Text, TextStyle, View, ViewStyle, StatusBar, TouchableOpacity} from "react-native"
import {NavigationScreenProp} from 'react-navigation'
import BaseFooter from '../../components/base/footer.js'
import LeftArrow from "../../images/left_arrow.svg";
const FULL: ViewStyle = {
    flex: 1,
    padding: 20
};

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
    navigation: NavigationScreenProp<any, any>
};

export default class Delivery extends React.Component<DeliveryScreenProps, object> {

    static navigationOptions = {
        title: 'DELIVERY',
    };

    render() {
        return (
            <View style={FULL}>
                <StatusBar backgroundColor="#4872ae" barStyle="dark-content"/>
                <View>
                    <TouchableOpacity style={{height: 50, flexDirection: 'row'}} onPress={() => this.props.navigation.navigate("Neighborhood")}>
                        <LeftArrow stle={{flex: 1}} width={20} height={20}></LeftArrow>
                        <Text style={{flex: 1, marginLeft: 5}}>Back</Text>
                    </TouchableOpacity>

                    <View>
                        <Text style={TITLE}>
                            {CONTENT.heading}
                        </Text>
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
                <Text style={CARRIERNAMESTYLE}>{c.name}</Text>
                <Text style={CARRIERTEXTSTYLE}>{c.url}</Text>
            </View>
        )
    }
}
const CARRIERNAMESTYLE : TextStyle = {
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
    marginBottom: 5,
};

const CARRIERTEXTSTYLE : TextStyle = {
    color: "#0078d7",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
    marginBottom: 15
};

const TITLE: TextStyle = {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
    marginBottom: 20
};

