import * as React from "react";
import {Text, View} from "react-native";
import {NavigationScreenProps} from "react-navigation";
import BaseScrollablePage from "../../base-page/ScrollablePage";
import { HEADERTITLESTYLE, HEADERSTYLE } from "../../shared/fonts";

export interface StaffScreenProps extends NavigationScreenProps {
}

export interface StaffScreenState {
    content: any
}

export default class StaffScreen extends React.Component<StaffScreenProps, StaffScreenState> {

    static navigationOptions = {
        title: 'STAFF',
        headerStyle: HEADERSTYLE,
        headerTitleStyle: HEADERTITLESTYLE
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
            <Text  style={{padding: 20}}>
                {"Staff Content Here"}
            </Text>
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
