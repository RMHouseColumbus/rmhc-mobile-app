import React from 'react';
import { Text, TextStyle, View, ViewStyle } from "react-native"
import { spacing } from "../../components/shared/spacing";
import { Header } from "../../components/header/header";

const FULL: ViewStyle = { flex: 1 };

const CONTENT = {
    header: "Find ride share information by visiting:",
    rideshare: [
        {
            id: 0,
            name: 'Lyft',
            url: 'https://www.lyft.com'
        },
        {
            id: 1,
            name: 'Uber',
            url: 'https://www.uber.com'
        }
    ],
    services: [
        {
            id: 0,
            name: "Cab Services",
            values: [
                {
                    name: "Yellow Cab of Columbus",
                    contact: '614-444-4445'
                },
                {
                    name: "Express Cab of Columbus",
                    contact: '614-822-8666'
                },
                {
                    name: "Ohio Taxi Service",
                    contact: '614-562-7959'
                }
            ]
        },
        {
            id: 1,
            name: "Public Transportation",
            values: [
                {
                    name: "Central Ohio Transit Authority (COTA)",
                    sub: "COTA Trip Planner:",
                    contact: "https://www.cota.com/trip-planner"
                }
            ]
        }
    ]
};


export default class Transportation extends React.Component {

    static navigationOptions = {
        title: 'TRANSPORTATION',
    };


    render() {
        return (
            <View style={FULL}>
                <View>
                    <Header titleStyle={TITLE} headerText={CONTENT.header}/>
                    <View style={SECTION}>
                        {
                            CONTENT.rideshare.map(c => {
                                return (
                                    this.rideShareInfo(c)
                                )
                            })
                        }
                    </View>
                    <View style={SECTION}>
                        {
                            CONTENT.services.map(c => {
                                return (
                                    this.serviceData(c)
                                )
                            })
                        }
                    </View>
                </View>
            </View>
        );
    }

    private rideShareInfo(c: any) {
        return (
            <View key={c.id}>
                <Text>{c.name}:{c.url}</Text>
            </View>
        )
    }

    private serviceData(c: any) {
        return (
            <View key={c.id} style={SECTION}>
                <Text style={BOLD}>{c.name}</Text>
                {
                    c.values.map((v,i) => {
                        return (
                            <View key={i}>
                                <Text>{v.name}:{v.contact}</Text>
                            </View>
                        )
                    })
                }
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
    marginBottom: spacing[1],
};

const SECTION: ViewStyle = {
    marginTop: spacing[5]
};

