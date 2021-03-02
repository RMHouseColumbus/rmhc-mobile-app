import React from 'react';
import {StyleSheet, Text, View, Linking} from 'react-native';
import {Card, CardItem} from 'native-base'
import {NavigationScreenProps} from "react-navigation";
import BaseScrollablePage from "../../shared/ScrollablePage";
import g from '../../styles/global';
import {HEADERSTYLEWHITE, HEADERTITLESTYLEBLACK} from '../../shared/fonts';
import {setStatusBar} from "../../shared/status-bar";
import {HospitalItem, ContentService} from "../../../services/ContentService";
import {getTextForDate} from "../../shared/Helpers";


export interface HospitalServiceState {
    hospitalItems: HospitalItem[]
}

export interface HospitalServiceProps extends NavigationScreenProps {
}


export default class HostipalServices extends React.Component<HospitalServiceProps, HospitalServiceState> {
    constructor(props) {
        super(props);
        this.state = {
            hospitalItems: []
        };
        setStatusBar(this, "#ffffff", 'dark-content');
    }

    static navigationOptions = {

        title: 'FAMILY ROOMS',
        headerStyle: HEADERSTYLEWHITE,
        headerTitleStyle: HEADERTITLESTYLEBLACK

    };

    onContentUpdate = (content: any) => {

        this.setState({
            hospitalItems: content
        });

    };

    contentEmpty = () => {
        const cardStyle = {
            ...g.card
        };
        return (
            <View style={styles.container}>
                <Card key={0} style={cardStyle}>
                    <CardItem bordered key={1} style={{borderRadius: 20}}>
                        <View>
                            <Text style={g.textContent}>No Activities</Text>
                        </View>
                    </CardItem>
                </Card>
            </View>
        )
    }

    contentAvail = (hospitalItems: HospitalItem[]) => {

        return <View style={styles.container}>
            {
                hospitalItems.map((item, index) => {
                    return (
                        <Card key={index} style={g.card}>
                            <CardItem bordered key={index} style={{borderRadius: 20}}>
                                <View>
                                    <Text style={g.textTitle}>{item.summary}</Text>
                                    <Text style={g.textType}>{getTextForDate(item.start, item.end)}</Text>
                                    <Text style={g.textContent}>{item.description}</Text>
                                </View>
                            </CardItem>
                        </Card>
                    )
                })
            }
        </View>

    }


    viewFunction = () => {
        const {hospitalItems} = this.state;
        const hasActivities = hospitalItems ? hospitalItems.length > 0 : false;
        return hasActivities ? this.contentAvail(hospitalItems) : this.contentEmpty();
    };


    render() {
        return (<BaseScrollablePage contentView={this.viewFunction}
                                    navigation={this.props.navigation}
                                    onContentLoad={this.onContentUpdate}
                                    contentFunction={ContentService.hospitalFeed}
            />
        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#638dc9"
    }
});
