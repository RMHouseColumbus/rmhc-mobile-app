import React from 'react';
import { Text, TextStyle, View, ViewStyle } from "react-native"
import { spacing } from "../../components/shared/spacing";
import { Header } from "../../components/header/header";

const FULL: ViewStyle = { flex: 1 };

const CONTENT = {
    retailers: [
        {
            id: 0,
            name: "Easton Town Center",
            address: "123 street",
            desc: "Boutique and Big Box Stores",
            cat: "Shoping Mall",
            dist: 10.3
        },
        {
            id: 1,
            name: "Polaris Fashion Place",
            address: "123 street",
            desc: "Boutique and Big Box Stores",
            cat: "Shoping Mall",
            dist: 15.8
        }

    ]
};


export default class Shopping extends React.Component {

    static navigationOptions = {
        title: 'Shopping',
    };


    render() {
        return (
            <View style={FULL}>
                <View>
                    <Header titleStyle={TITLE} leftIcon={'back'}/>
                    <View>
                        {
                            CONTENT.retailers.map(c => {
                                return (
                                    this.retailRow(c)
                                )
                            })
                        }
                    </View>
                </View>
            </View>
        );
    }

    private retailRow(c: any) {
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

const TITLE: TextStyle = {
    ...BOLD,
    fontSize: 15,
    lineHeight: 38,
    textAlign: "center",
    marginBottom: spacing[5],
};

const ROW : ViewStyle = {
    marginTop: spacing[5]
} ;

