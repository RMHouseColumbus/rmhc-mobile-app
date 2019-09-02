import React from 'react';
import {ActivityIndicator, StatusBar, StyleSheet, Text, View, ViewStyle} from "react-native"
import {spacing} from "../../shared/spacing";
import {ContentService} from "../../../services/ContentService";
import {CONTENTSTYLE, LINKSTYLE, TEXTSTYLE} from '../../shared/fonts';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LeftArrow from '../../../images/left_arrow.svg';
import {getStatusBar} from '../../shared/statusBar';
import {NavigationScreenProps} from 'react-navigation';
import BaseFooter from '../../shared/footer';

const FULL: ViewStyle = {
    flex: 1,
    padding: 20
};


interface TransportationProps extends NavigationScreenProps {
}

interface TransportationState {
    isLoading: boolean,
    rideShares: any
    cabCompanies: any
    publicTrans: any
}

export default class Transportation extends React.Component<TransportationProps, TransportationState> {

    static navigationOptions = {
        title: 'Transportation',
        headerTitleStyle: {
            fontSize: 20,
            color: '#ffffff'
        }
    };

    public constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            rideShares: [],
            cabCompanies: [],
            publicTrans: []
        }
    }

    componentDidMount(): void {
        ContentService.contentForPage("transportation")
            .then((result) => {
                    this.setState({
                        isLoading: false,
                        rideShares: result.content.Rideshare,
                        cabCompanies: result.content.CabServices,
                        publicTrans: result.content.PublicTransportation
                    })
                }
            );
    }

    render() {

        const isLoading = this.state.isLoading;
        const rideShares = this.state.rideShares;
        const cabCompanies = this.state.cabCompanies;
        const publicTrans = this.state.publicTrans;
        const backTo = () => this.props.navigation.navigate("Neighborhood");

        if (isLoading) {
            return this.loadingComponent();
        } else {
            return (
                <View style={FULL}>
                    {
                        getStatusBar()
                    }
                    <View>
                        <TouchableOpacity style={{height: 50, flexDirection: 'row'}} onPress={backTo}>
                            <LeftArrow stle={{flex: 1}} width={20} height={20}/>
                            <Text style={{flex: 1, marginLeft: 5}}>Back</Text>
                        </TouchableOpacity>
                        <View style={SECTION}>
                            <Text style={CONTENTSTYLE}>Rideshare</Text>
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


                    <BaseFooter navigation={this.props.navigation}/>

                </View>
            );
        }
    }

    private loadingComponent() {
        return (
            <View style={{flex: 1}}>
                <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF"/>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={main.container}>
                        <ActivityIndicator/>
                    </View>
                </View>
            </View>
        )
    }

    private rideShareInfo(c: any) {
        return (
            <View key={c.id}>
                <Text style={TEXTSTYLE}>{c.name}:</Text>
                <Text style={LINKSTYLE}>{c.url}</Text>
            </View>
        )
    }

    private cabServiceData(c: any) {
        return (
            <View key={c.id}>
                <Text style={TEXTSTYLE}>{c.name}:{c.contact}</Text>
            </View>
        )
    }

    private publicTransportationData(c: any) {
        return (
            <View key={c.id}>
                <Text style={TEXTSTYLE}>{c.name}</Text>
                <Text style={TEXTSTYLE}>{c.sub}</Text>
                <Text style={LINKSTYLE}>{c.contact}</Text>
            </View>
        )
    }

}

const SECTION: ViewStyle = {
    marginTop: spacing[5]
};

const main = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 20,
        top: 50
    }
});