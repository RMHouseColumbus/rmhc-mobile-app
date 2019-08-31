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
import {ContentService} from "../../services/ContentService";
import {NavigationScreenProps} from "react-navigation";
import {getStatusBar} from "../../components/shared/statusBar";
import BaseFooter from "../../components/base/footer";

const FULL: ViewStyle = {flex: 1, padding: 20};

interface ShoppingProps extends NavigationScreenProps {

}

interface ShoppingState {
    isLoading: boolean,
    retailers: any
}


export default class Shopping extends React.Component<ShoppingProps, ShoppingState> {

    static navigationOptions = {
        title: 'Shopping',
        headerTitleStyle: {
            fontSize: 20,
            color: '#ffffff'
        }
    };

    public constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            retailers: []
        }
    }

    componentDidMount(): void {
        ContentService.contentForPage("shopping")
            .then((result) => {
                    this.setState({
                        isLoading: false,
                        retailers: result.content.retailers
                    })
                }
            )
    }


    render() {

        const isLoading = this.state.isLoading;
        const retailers = this.state.retailers;

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
                            <LeftArrow stle={{flex: 1}} width={20} height={20}/>
                            <Text style={{flex: 1, marginLeft: 5}}>Back</Text>
                        </TouchableOpacity>

                        <View>
                            {
                                retailers.map(c => {
                                    return (
                                        this.retailRow(c)
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

    private retailRow(c: any) {
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
