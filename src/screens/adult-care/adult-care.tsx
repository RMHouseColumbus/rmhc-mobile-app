import React from 'react';
import {StatusBar, Text, TextStyle, TouchableOpacity, View, ViewStyle} from "react-native"
import { spacing } from "../../components/shared/spacing";
import { Header } from "../../components/header/header";
import LeftArrow from '../../images/left_arrow.svg';

const FULL: ViewStyle = { flex: 1, padding: 20 };

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
                <StatusBar backgroundColor="#4872ae" barStyle="dark-content"/>
                <View>
                    <TouchableOpacity style={{height: 50, flexDirection: 'row'}} onPress={() => this.props.navigation.navigate("Neighborhood")}>
                        <LeftArrow stle={{flex: 1}} width={20} height={20}></LeftArrow>
                        <Text style={{flex: 1, marginLeft: 5}}>Back</Text>
                    </TouchableOpacity>

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
    marginBottom: spacing[1],
};

const ROW : ViewStyle = {
    marginTop: spacing[3]
} ;

