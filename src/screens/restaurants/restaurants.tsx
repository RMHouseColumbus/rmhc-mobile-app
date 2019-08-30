import React from 'react';
import {
    ActivityIndicator,
    StatusBar,
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    View,
    ViewStyle
} from "react-native"
import {spacing} from "../../components/shared/spacing";
import LeftArrow from '../../images/left_arrow.svg';
import {NavigationScreenProps} from "react-navigation";
import {getStatusBar} from "../../components/shared/statusBar";
import {TITLE} from "../../components/shared/fonts";
import BaseFooter from "../../components/base/footer";
import {ContentService} from "../../services/ContentService";

const FULL: ViewStyle = {flex: 1, padding: 20};

interface RestaurantsProps extends NavigationScreenProps {

}

interface RestaurantsState {
    isLoading: boolean,
    restaurants: any
}


export default class Restaurants extends React.Component<RestaurantsProps, RestaurantsState> {

    static navigationOptions = {
        title: 'Restaurants',
    };

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            restaurants: []
        }
    }

    componentDidMount(): void {

        ContentService.contentForPage("restaurants")
            .then((result) => {
                    this.setState({
                        isLoading: false,
                        restaurants: result.content
                    })
                }
            )
    }


    render() {

        const isLoading = this.state.isLoading;
        const restaurants = this.state.restaurants;

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
                                restaurants.map(c => {
                                    return (
                                        this.restaurantRow(c)
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

    private restaurantRow(c: any) {
        return (
            <View key={c.id} style={ROW}>
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
const main = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 20,
        top: 50
    }
});


