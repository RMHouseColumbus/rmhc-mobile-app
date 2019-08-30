import React from 'react';
import {Text, TextStyle, View, ViewStyle} from "react-native"
import {spacing} from "../../components/shared/spacing";
import {Header} from "../../components/header/header";
import {ContentService} from "../../services/ContentService";

const FULL: ViewStyle = {flex: 1};

export interface TransportationState {
    content: any
}

export default class Transportation extends React.Component<{}, TransportationState> {

    public constructor(props) {
        super(props);
        this.state = {
            content: {
                rideshare: [],
                services: [],
                header: "Find ride share information by visiting:"
            }
        }
    }

    componentDidMount(): void {
        const data = ContentService.contentForPage("transportation");
        this.setState({
            content: data
        })
    }

    static navigationOptions = {
        title: 'TRANSPORTATION',
    };

    render() {
        const CONTENT = this.state.content;
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
                    c.values.map((v, i) => {
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

const BOLD: TextStyle = {fontWeight: "bold"};

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

