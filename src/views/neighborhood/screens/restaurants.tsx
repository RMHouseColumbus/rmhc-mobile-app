import React from 'react';
import {Text, TextStyle, View, ViewStyle} from "react-native"
import {spacing} from "../../shared/spacing";
import {NavigationScreenProps} from "react-navigation";
import {TITLE, HEADERTITLESTYLE, HEADERSTYLE} from "../../shared/fonts";
import BaseScrollablePage from "../../base-page/ScrollablePage";

interface RestaurantsProps extends NavigationScreenProps {

}

interface RestaurantsState {
    restaurants: any
}


export default class Restaurants extends React.Component<RestaurantsProps, RestaurantsState> {

    static navigationOptions = {
        title: 'Restaurants',
        headerStyle: HEADERSTYLE,
        headerTitleStyle: HEADERTITLESTYLE
    };

    constructor(props) {
        super(props);
        this.state = {
            restaurants: []
        }
    }

    onContentUpdate = (content: any) => {

        this.setState({
            restaurants: content.restaurants
        })
    };

    viewFunction = () => {
        const restaurants = this.state.restaurants;
        return (
            <View  style={{padding: 20}}>
                <Text style={TITLE}>
                    Find restaurants that deliver by carrier:
                </Text>
                {
                    restaurants.map(c => {
                        return (
                            this.restaurantRow(c)
                        )
                    })
                }
            </View>
        )
    };

    render() {
        return (
            <BaseScrollablePage contentLoad={"restaurants"}
                                onContentLoad={this.onContentUpdate}
                                contentView={this.viewFunction}
                                navigation={this.props.navigation}
                                back={"Neighborhood"}/>
        )
    }

    private restaurantRow(c: any) {
        return (
            <View key={c.name} style={ROW}>
                <Text style={BOLD}>{c.name}</Text>
                <Text>{c.address}</Text>
                <Text>Description: {c.desc}</Text>
                <Text>Category: {c.cat}</Text>
                <Text>Distance: {c.dist} miles</Text>
            </View>
        )
    }
}

const BOLD: TextStyle = {fontWeight: "bold"};
const ROW: ViewStyle = {
    marginBottom: spacing[5]
};



