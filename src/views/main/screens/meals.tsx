import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationScreenProps} from "react-navigation";
import {ContentService, MealItem} from "../../../services/ContentService";
import {Card, CardItem} from "native-base";
import BaseScrollablePage from "../../shared/ScrollablePage";

import g from '../../styles/global';

import {HEADERSTYLEBLUE, HEADERTITLESTYLEWHITE} from '../../shared/fonts';
import {setStatusBar} from "../../shared/status-bar";
import {getTextForDate} from "../../shared/Helpers";


export interface MealsScreenProps extends NavigationScreenProps {
}

export interface MealsScreenState {
    meals: MealItem[]
}

export default class Meals extends React.Component <MealsScreenProps, MealsScreenState> {

    static navigationOptions = {
        title: 'MEALS',
        headerStyle: HEADERSTYLEBLUE,
        headerTitleStyle: HEADERTITLESTYLEWHITE
    };

    public constructor(props) {
        super(props);
        this.state = {
            meals: []
        };
        setStatusBar(this, "#1c5ca3", 'light-content');
    }

    onContentUpdate = (content: any) => {
        this.setState({
            meals: content
        })
    };

    viewFunction = () => {
        const {meals} = this.state;

        return (
            <View style={styles.container}>
                {
                    meals.map((item, i) => {
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

        return (
            <BaseScrollablePage onContentLoad={this.onContentUpdate}
                                contentView={this.viewFunction}
                                navigation={this.props.navigation}
                                contentFunction={ContentService.mealFeed}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#638dc9"
    }
});
