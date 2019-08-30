import React from 'react';
import { Text, TextStyle, View, ViewStyle } from "react-native"
import { spacing } from "../../components/shared/spacing";

const FULL: ViewStyle = { flex: 1 };

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
    marginTop: spacing[5]
};

