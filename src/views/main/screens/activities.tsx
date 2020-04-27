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


export interface ActivitiesState {
    activities: ActivityItem[]
}

export interface ActivityProps extends NavigationScreenProps {
}


export default class Activities extends React.Component<ActivityProps, ActivitiesState> {
    constructor(props) {
        super(props);
        this.state = {
            activities: []
        };
        setStatusBar(this, "#ffffff", 'dark-content');
    }

    static navigationOptions = {

        title: 'ACTIVITIES',
        headerStyle: HEADERSTYLEWHITE,
        headerTitleStyle: HEADERTITLESTYLEBLACK

    };

    onContentUpdate = (content: any) => {

        this.setState({
            activities: content
        });

    };



    viewFunction = () => {
        const {activities} = this.state;

        return (
            <View style={styles.container}>
                {
                    activities.map((item, i) => {
                        return (
                            <Card key={i} style={g.card}>
                                <CardItem bordered key={i} style={{borderRadius: 20}}>
                                    <View>
                                        <Text style={g.textTitle}>{item.summary}</Text>
                                        <Text
                                            style={g.textType}>{getTextForDate(item.start, item.end)}</Text>
                                        <Text style={g.textContent}>{item.description}</Text>
                                    </View>
                                </CardItem>
                            </Card>
                        )
                    })
                }
            </View>
        )
    };


    render() {
        return (<BaseScrollablePage contentView={this.viewFunction}
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