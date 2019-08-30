import React from 'react';
import {Text, TextStyle, View, ViewStyle, StatusBar, TouchableOpacity} from "react-native"
import {NavigationScreenProp} from 'react-navigation'
import BaseFooter from '../../components/base/footer.js'
import LeftArrow from '../../images/left_arrow.svg';
import {getStatusBar} from '../../components/shared/statusBar';
import { CONTENTSTYLE, LINKSTYLE, TITLE } from '../../components/shared/fonts';

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
                {
                    getStatusBar()
                }
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
                <Text style={CONTENTSTYLE}>{c.name}</Text>
                <Text style={LINKSTYLE}>{c.url}</Text>
            </View>
        )
    }
}


