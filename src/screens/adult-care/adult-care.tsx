import React from 'react';
import { Text, TextStyle, View, ViewStyle } from "react-native"
import { spacing } from "../../components/shared/spacing";
import { Header } from "../../components/header/header";

const FULL: ViewStyle = { flex: 1 };

const CONTENT = {
    providers: [
        {
            id: 0,
            name: "Grant Medical Center, Ohio Health",
            address: "123 street",
            number: "(614) 566*9000",
            link: "https://www.ohiohealth.com/locations/hospitals/grant-medicalcenter/"

        }
    ]
};


export default class AdultCare extends React.Component {

    static navigationOptions = {
        title: 'ADULT CARE',
    };


    render() {
        return (
            <View style={FULL}>
                <View>
                    <Header titleStyle={TITLE} leftIcon={'back'}/>
                    <View>
                        {
                            CONTENT.providers.map(c => {
                                return (
                                    this.providerRow(c)
                                )
                            })
                        }
                    </View>
                </View>
            </View>
        );
    }

    private providerRow(c: any) {
        return (
            <View key={c.id} style={ROW}>
                <Text style={BOLD}>{c.name}</Text>
                <Text>{c.address}</Text>
                <Text>{c.number}</Text>
                <Text>{c.link}</Text>
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

