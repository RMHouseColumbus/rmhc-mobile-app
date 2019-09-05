import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationScreenProps} from "react-navigation";
import {ContentService, MealItem} from "../../../services/ContentService";
import {Card, CardItem} from "native-base";
import BaseScrollablePage from "../../base-page/ScrollablePage";
import g from '../../styles/global';

export interface MealsScreenProps extends NavigationScreenProps {
}

export interface MealsScreenState {
    meals: MealItem[]
}

export default class Meals extends React.Component <MealsScreenProps, MealsScreenState> {

    static navigationOptions = {
        title: 'Meals',
    };

    public constructor(props) {
        super(props);
        this.state = {
            meals: []
        }
    }

    onContentUpdate = (content: any) => {
        this.setState({
            meals: content
        })
    };

    getHour = (time: Date) => {
        let h = time.getHours();
        let m = time.getMinutes();
        const x = h >= 12 ? 'pm' : 'am';
        h = h % 12;
        h = h ? h : 12;
        const final = m < 10 ? '0' + m : m;
        return h + ':' + final + ' ' + x;
    };

    getTextForDate = (start: Date, end: Date) => {
        return `${start.toDateString()} ${this.getHour(start)}-${this.getHour(end)}`;
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
                                        <Text style={styles.textTitle}>{item.summary}</Text>
                                        <Text
                                            style={styles.textType}>{this.getTextForDate(item.start, item.end)}</Text>
                                        <Text style={styles.textContent}>{item.description}</Text>
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
    },
    textType: {
        fontFamily: "System",
        fontSize: 12,
        color: 'black'
    },
    textTitle: {
        fontFamily: "System",
        fontSize: 20,
        color: 'black',
        fontWeight: "bold"
    },
    textContent: {
        marginTop: "1%",
        fontFamily: "System",
        fontSize: 14,
        color: 'black'
    }
});
