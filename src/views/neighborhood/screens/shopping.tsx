import React from 'react';
import {Text, TextStyle, View, ViewStyle} from "react-native"
import {spacing} from "../../shared/spacing";
import {NavigationScreenProps} from "react-navigation";
import BaseScrollablePage from "../../shared/ScrollablePage";
import { HEADERSTYLEBLUE, HEADERTITLESTYLEWHITE } from '../../shared/fonts';

interface ShoppingProps extends NavigationScreenProps {

}

interface ShoppingState {
    retailers: any
}


export default class Shopping extends React.Component<ShoppingProps, ShoppingState> {

    static navigationOptions = {
        title: 'SHOPPING',
        headerStyle: HEADERSTYLEBLUE,
        headerTitleStyle: HEADERTITLESTYLEWHITE
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
            <View  style={{padding: 20}}>
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
                <Text style={REGULAR}>{c.address}</Text>
                <Text style={REGULAR}>Description: {c.desc}</Text>
                <Text style={REGULAR}>Category: {c.cat}</Text>
                <Text style={REGULAR}>Distance: {c.dist} miles</Text>
            </View>
        )
    }
}

const BOLD: TextStyle = {fontWeight: "bold", fontFamily:'Raleway-Bold', paddingBottom:5, fontSize:16};
const REGULAR: TextStyle = {fontFamily:'Raleway-Regular', paddingBottom:5, fontSize:16};


const ROW: ViewStyle = {
    marginBottom: spacing[5]
};
