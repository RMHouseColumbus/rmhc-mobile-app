import React from 'react';
import {Text, TextStyle, View, ViewStyle} from "react-native"
import {spacing} from "../../shared/spacing";
import {NavigationScreenProps} from "react-navigation";
import BaseScrollablePage from "../../base-page/ScrollablePage";

interface ShoppingProps extends NavigationScreenProps {

}

interface ShoppingState {
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
        super(props);
        this.state = {
            retailers: []
        }
    }

    onContentUpdate = (content: any) => {

        this.setState({
            retailers: content.retailers
        });

    };

    viewFunction = () => {
        const retailers = this.state.retailers;

        return (
            <View>
                {
                    retailers.map(c => {
                        return (
                            this.retailRow(c)
                        )
                    })
                }
            </View>
        )
    };


    render() {
        return (
            <BaseScrollablePage
                contentLoad={"shopping"}
                onContentLoad={this.onContentUpdate}
                contentView={this.viewFunction}
                navigation={this.props.navigation}
                back={"Neighborhood"}/>
        )
    }

    private retailRow(c: any) {
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
