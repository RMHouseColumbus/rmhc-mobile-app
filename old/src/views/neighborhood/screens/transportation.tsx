import React from 'react';
import {Linking, Text, View, ViewStyle} from "react-native"
import {spacing} from "../../shared/spacing";
import {CONTENTSTYLE, LINKSTYLE, TEXTSTYLE, HEADERSTYLEBLUE, HEADERTITLESTYLEWHITE} from '../../shared/fonts';
import {NavigationScreenProps} from 'react-navigation';
import BaseScrollablePage from "../../shared/ScrollablePage";
import {setStatusBar} from "../../shared/status-bar";


interface TransportationProps extends NavigationScreenProps {
}

interface TransportationState {
    rideShares: any
    cabCompanies: any
    publicTrans: any
}

export default class Transportation extends React.Component<TransportationProps, TransportationState> {

    static navigationOptions = {
        title: 'TRANSPORTATION',
        headerStyle: HEADERSTYLEBLUE,
        headerTitleStyle: HEADERTITLESTYLEWHITE
    };

    public constructor(props) {
        super(props);
        this.state = {
            rideShares: [],
            cabCompanies: [],
            publicTrans: []
        };
        setStatusBar(this, "#1c5ca3", 'light-content');
    }


    onContentUpdate = (content: any) => {
        this.setState({
            rideShares: content.Rideshare,
            cabCompanies: content.CabServices,
            publicTrans: content.PublicTransportation
        })

    };

    viewFunction = () => {
        const rideShares = this.state.rideShares;
        const cabCompanies = this.state.cabCompanies;
        const publicTrans = this.state.publicTrans;

        return (
            <View style={{padding: 20}}>
                <View style={SECTION}>
                    <Text style={CONTENTSTYLE}>Rideshare</Text>
                    <Text style={TEXTSTYLE}>Find ride share information by visiting:</Text>
                    {
                        rideShares.map(c => {
                            return (
                                this.rideShareInfo(c)
                            )
                        })
                    }
                </View>

                <View style={SECTION}>
                    <Text style={CONTENTSTYLE}>Cab Service</Text>
                    {
                        cabCompanies.map(c => {
                            return (
                                this.cabServiceData(c)
                            )
                        })
                    }
                </View>

                <View style={SECTION}>
                    <Text style={CONTENTSTYLE}>Public Transportation</Text>
                    {
                        publicTrans.map(c => {
                            return (
                                this.publicTransportationData(c)
                            )
                        })
                    }
                </View>
            </View>
        )

    };

    render() {

        return (
            <BaseScrollablePage contentLoad={"transportation"}
                                onContentLoad={this.onContentUpdate}
                                contentView={this.viewFunction}
                                navigation={this.props.navigation}
                                back={"Neighborhood"}>
            </BaseScrollablePage>
        )

    }

    private rideShareInfo(c: any) {
        return (
            <View style={{marginTop:"2%"}} key={c.name}>
                <Text onPress={() => Linking.openURL(c.url)}
                      style={LINKSTYLE}>{c.name}</Text>
            </View>
        )
    }

    private cabServiceData(c: any) {
        return (
            <View style={{flexDirection:"row"}} key={c.name}>
                <Text style={TEXTSTYLE}>{c.name}:</Text>
                <Text onPress={() => Linking.openURL(`tel:${c.contact}`)}
                      style={LINKSTYLE}>{c.contact}</Text>
            </View>
        )
    }

    private publicTransportationData(c: any) {
        return (
            <View key={c.name}>
                <Text style={TEXTSTYLE}>{c.name}</Text>
                <Text onPress={() => Linking.openURL(c.contact)}
                      style={LINKSTYLE}>{c.sub}</Text>
            </View>
        )
    }

}

const SECTION: ViewStyle = {
    marginBottom: spacing[5]
};
