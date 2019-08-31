import React from 'react';
import {ActivityIndicator, Linking, StatusBar, StyleSheet, Text, TouchableOpacity, View, ViewStyle} from "react-native"
import {NavigationScreenProps} from 'react-navigation'
import BaseFooter from '../../components/base/footer.js'
import LeftArrow from '../../images/left_arrow.svg';
import {getStatusBar} from '../../components/shared/statusBar';
import {CONTENTSTYLE, LINKSTYLE, TITLE} from '../../components/shared/fonts';
import {ContentService} from "../../services/ContentService";

const FULL: ViewStyle = {
    flex: 1,
    padding: 20
};


export interface DeliveryScreenProps extends NavigationScreenProps {
}

export interface DeliveryScreenState {
    isLoading: boolean,
    content: any
}

export default class Delivery extends React.Component<DeliveryScreenProps, DeliveryScreenState> {

    static navigationOptions = {
        title: 'DELIVERY',
        headerTitleStyle: {
            fontSize: 20,
            color: '#ffffff'
        }
    };

    public constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            content: []
        }
    }

    componentDidMount(): void {
        ContentService.contentForPage("delivery")
            .then((result) => {
                    this.setState({
                        isLoading: false,
                        content: result.content
                    })
                }
            )
    }



    render() {
        const isLoading = this.state.isLoading;
        const carriers = this.state.content.carriers;

        if (isLoading) {
            return this.loadingComponent();
        } else {

            return (
                <View style={FULL}>
                    {
                        getStatusBar()
                    }
                    <View>
                        <TouchableOpacity style={{height: 50, flexDirection: 'row'}}
                                          onPress={() => this.props.navigation.navigate("Neighborhood")}>
                            <LeftArrow stle={{flex: 1}} width={20} height={20}></LeftArrow>
                            <Text style={{flex: 1, marginLeft: 5}}>Back</Text>
                        </TouchableOpacity>

                        <View>
                            <Text style={TITLE}>
                                Find restaurants that deliver by carrier:
                            </Text>
                            {
                                carriers.map(c => {
                                    return (
                                        this.carrierRow(c)
                                    )
                                })
                            }
                        </View>
                    </View>
                    <BaseFooter navigation={this.props}/>
                </View>
            )
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

    private carrierRow(c: any) {
        return (
            <View key={c.id}>
                <Text style={CONTENTSTYLE}>{c.name}</Text>
                <Text onPress={() => Linking.openURL(c.url)}
                    style={LINKSTYLE}>{c.url}</Text>
            </View>
        )
    }
}

const main = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 20,
        top: 50
    }
});
