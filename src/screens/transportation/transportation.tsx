import React from 'react';
import {Text, TextStyle, View, ViewStyle} from "react-native"
import {spacing} from "../../components/shared/spacing";
import {Header} from "../../components/header/header";
import {ContentService} from "../../services/ContentService";
import { CONTENTSTYLE, LINKSTYLE, TEXTSTYLE, TITLE } from '../../components/shared/fonts';
import { tsExportAssignment } from '@babel/types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LeftArrow from '../../images/left_arrow.svg';
import { getStatusBar } from '../../components/shared/statusBar';
import { DeliveryScreenProps } from '../delivery/delivery';

const FULL: ViewStyle = {
    flex: 1,
    padding: 20
};

export interface TransportationState {
    content: any
}

const CONTENT_RAW = {transportation: {
    Rideshare: [
      {
        id: 0,
        name: "Lyft",
        url: "https://www.lyft.com"
      },
      {
        id: 1,
        name: "Uber",
        url: "https://www.uber.com"
      }
    ],
    CabServices: [
      {
        id: 0,
        name: "Yellow Cab of Columbus",
        contact: "(614) 444-4445"
      },
      {
        id: 1,
        name: "Express Cab of Columbus",
        contact: "(614) 822-8666"
      },
      {
        id: 2,
        name: "Ohio Taxi Service",
        contact: "(614) 562-7959"
      }
    ],
    PublicTransportation: [
      {
        id: 0,
        name: "Central Ohio Transit Authority (COTA)",
        sub: "COTA Trip Planner:",
        contact: "https://www.cota.com/trip-planner"
      }
    ]
  }
}

export default class Transportation extends React.Component<DeliveryScreenProps, TransportationState> {

    public constructor(props) {
        super(props);
        this.state = {
            content : CONTENT_RAW
        }
    }

    // componentDidMount(): void {
    //     const data = ContentService.contentForPage("transportation");
    //     this.setState({
    //         content: data
    //     })
    // }

    static navigationOptions = {
        title: 'TRANSPORTATION',
    };

    render() {
        const CONTENT = this.state.content;
        return (
            <View style={FULL}>
                {
                    getStatusBar()
                }
                <View>
                    <TouchableOpacity style={{height: 50, flexDirection: 'row'}} onPress={() => this.props.navigation.navigate("Neighborhood")}>
                        <LeftArrow stle={{flex: 1}} width={20} height={20}></LeftArrow>
                        <Text style={{flex: 1, marginLeft: 5}}>Back</Text>
                    </TouchableOpacity>
                    <View style={SECTION}>
                        <Text style={CONTENTSTYLE}>Rideshare</Text>    
                        {
                            CONTENT.transportation.Rideshare.map(c => {
                                return (
                                    this.rideShareInfo(c)
                                )
                            })
                        }
                    </View>
                    
                    <View style={SECTION}>
                        <Text style={CONTENTSTYLE}>Cab Service</Text>
                        {
                            CONTENT.transportation.CabServices.map(c => {
                                return (
                                    this.cabServiceData(c)
                                )
                            })
                        }
                    </View>

                    <View style={SECTION}>
                        <Text style={CONTENTSTYLE}>Public Transportation</Text>
                        {
                            CONTENT.transportation.PublicTransportation.map(c => {
                                return (
                                    this.publicTransportationData(c)
                                )    
                            })
                        }
                    </View>

                </View>
            </View>
        );
    }

    // private carrierRow(c: any) {
    //     return (
    //         <View key={c.id}>
    //             <Text style={CONTENTSTYLE}>{c.name}</Text>
    //             <Text style={LINKSTYLE}>{c.url}</Text>
    //         </View>
    //     )
    // }

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

const BOLD: TextStyle = {fontWeight: "bold"};



const SECTION: ViewStyle = {
    marginTop: spacing[5]
};

