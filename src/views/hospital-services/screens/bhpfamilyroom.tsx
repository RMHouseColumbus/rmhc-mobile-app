import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card, CardItem} from 'native-base'
import {NavigationScreenProps} from "react-navigation";
import BaseScrollablePage from "../../shared/ScrollablePage";

import g from '../../styles/global';
import {HEADERSTYLEWHITE, HEADERTITLESTYLEBLACK} from '../../shared/fonts';
import {setStatusBar} from "../../shared/status-bar";
import {ActivityItem, ContentService} from "../../../services/ContentService";
import {getTextForDate} from "../../shared/Helpers";
import { titleStyle } from "../screens/styles";

export interface BHPFamilyRoomState {
    activities: ActivityItem[]
}

export interface BHPFamilyRoomProps extends NavigationScreenProps {
}


export default class BHPFamilyRoom extends React.Component<BHPFamilyRoomProps, BHPFamilyRoomState> {
    constructor(props) {
        super(props);
        this.state = {
            activities: []
        };
        setStatusBar(this, "#ffffff", 'dark-content');
    }

    static navigationOptions = {

        title: 'BHP Family Rooms',
        headerStyle: HEADERSTYLEWHITE,
        headerTitleStyle: titleStyle

    };

    onContentUpdate = (content: any) => {

        this.setState({
            activities: content
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
                            <Text style={g.textContent}>Room Information Unavailable</Text>
                        </View>
                    </CardItem>
                </Card>
            </View>
        )
    }

    contentAvail = (activities: ActivityItem[]) => {

        return <View style={styles.container}>
            {
                activities.map((item, index) => {
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
        const {activities} = this.state;
        const hasActivities = activities ? activities.length > 0 : false;
        return hasActivities ? this.contentAvail(activities) : this.contentEmpty();
    };


    render() {
        return (<BaseScrollablePage back={"HospitalServices"} contentView={this.viewFunction}
                                    navigation={this.props.navigation}
                                    onContentLoad={this.onContentUpdate}
                                    contentFunction={ContentService.activityFeed}
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
