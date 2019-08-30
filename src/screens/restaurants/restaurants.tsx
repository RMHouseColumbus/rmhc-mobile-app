import React from 'react';
import {StatusBar, Text, TextStyle, TouchableOpacity, View, ViewStyle} from "react-native"
import { spacing } from "../../components/shared/spacing";
import LeftArrow from '../../images/left_arrow.svg';

const FULL: ViewStyle = { flex: 1, padding: 20};

const CONTENT = {
    restaurants: [
        {
            id: 0,
            name: "Koko (Inside Nationwide Children's Hospital)",
            address: "123 street",
            desc: "Fresh, light fare",
            cat: "Chinese Restaurant",
            dist: 0.0
        },
        {
            id: 1,
            name: "Subway (Inside Nationwide Children's Hospital)",
            address: "124 street",
            desc: "Open 24 hours",
            cat: "Fast Food",
            dist: 0.0
        }
    ]
};


export default class Restaurants extends React.Component {

    static navigationOptions = {
        title: 'Restaurants',
    };


    render() {
        return (
            <View style={FULL}>
                <View>
                    <TouchableOpacity style={{height: 50, flexDirection: 'row'}} onPress={() => this.props.navigation.navigate("Neighborhood")}>
                        <LeftArrow stle={{flex: 1}} width={20} height={20}></LeftArrow>
                        <Text style={{flex: 1, marginLeft: 5}}>Back</Text>
                    </TouchableOpacity>
                    {
                        CONTENT.restaurants.map(c => {
                            return (
                                this.restaurantRow(c)
                            )
                        })
                    }
                </View>
            </View>
        );
    }

    private restaurantRow(c: any) {
        return (
            <View key={c.id} style={ROW}>
                <Text style={BOLD}>{c.name}</Text>
                <Text>{c.address}</Text>
                <Text>Description: {c.desc}</Text>
                <Text>Category: {c.cat}</Text>
                <Text>Distance: {c.dist} miles</Text>
            </View>
        )
    }
}

const BOLD: TextStyle = { fontWeight: "bold" };
const ROW: ViewStyle = {
    marginBottom: spacing[5]
};

