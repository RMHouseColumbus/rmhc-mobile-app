import * as React from "react";
import {StatusBar, Text, View} from "react-native";
import {NavigationScreenProps} from "react-navigation";
import BaseScrollablePage from "../../shared/ScrollablePage";
import {HEADERSTYLEBLUE, HEADERTITLESTYLEWHITE} from "../../shared/fonts";

export interface StaffScreenProps extends NavigationScreenProps {
}

export interface StaffScreenState {
    content: any
}

export default class StaffScreen extends React.Component<StaffScreenProps, StaffScreenState> {

    static navigationOptions = {
        title: 'STAFF',
        headerStyle: HEADERSTYLEBLUE,
        headerTitleStyle: HEADERTITLESTYLEWHITE
    };

    public constructor(props) {
        super(props);
        this.state = {
            content: []
        }
    }

    onContentUpdate = (content: any) => {
        this.setState({
            content: content
        })
    };

    viewFunction = () => {
        return (
            <View>
                <StatusBar backgroundColor="#1c5ca3" barStyle="dark-content" style={{color: "#FFFFFF"}}/>
                <Text style={{padding: 20}}>
                    {"Staff Content Here"}
                </Text>
            </View>
        )
    };


    render() {
        return (
            <BaseScrollablePage back={"About"}
                                contentLoad={"staff"}
                                onContentLoad={this.onContentUpdate}
                                contentView={this.viewFunction}
                                navigation={this.props.navigation}
            />
        )
    }
}
