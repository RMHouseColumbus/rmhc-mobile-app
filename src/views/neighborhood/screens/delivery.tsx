import React from 'react';
import {Linking, Text, View} from "react-native"
import {NavigationScreenProps} from 'react-navigation'
import {LINKSTYLE, TITLE, HEADERSTYLEBLUE, HEADERTITLESTYLEWHITE} from '../../shared/fonts';
import BaseScrollablePage from "../../shared/ScrollablePage";
import {setStatusBar} from "../../shared/status-bar";

export interface DeliveryScreenProps extends NavigationScreenProps {
}

export interface DeliveryScreenState {
    content: any
}

export default class Delivery extends React.Component<DeliveryScreenProps, DeliveryScreenState> {

    static navigationOptions = {
        title: 'DELIVERY',
        headerStyle: HEADERSTYLEBLUE,
        headerTitleStyle: HEADERTITLESTYLEWHITE
    };

    public constructor(props) {
        super(props);
        this.state = {
            content: {
                carriers: []
            }
        };
        setStatusBar(this, "#1c5ca3", 'light-content');
    }

    onContentUpdate = (content: any) => {
        this.setState({
            content: content
        })
    };

    viewFunction = () => {
        const carriers = this.state.content.carriers;
        return (
            <View style={{padding: 20}}>
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
        )
    };

    render() {

        return <BaseScrollablePage contentLoad={"delivery"}
                                   onContentLoad={this.onContentUpdate}
                                   contentView={this.viewFunction}
                                   navigation={this.props.navigation}
                                   back={"Neighborhood"}/>

    }

    private carrierRow(c: any) {
        return (
            <View key={c.name}>
                <Text onPress={() => Linking.openURL(c.url)}
                      style={LINKSTYLE}>{c.name}</Text>
            </View>
        )
    }
}
