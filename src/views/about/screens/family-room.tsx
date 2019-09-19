import * as React from "react";
import {Text, View} from "react-native";
import {NavigationScreenProps} from "react-navigation";
import BaseScrollablePage from "../../shared/ScrollablePage";
import {HEADERSTYLEBLUE, HEADERTITLESTYLEWHITE} from "../../shared/fonts";
import {setStatusBar} from "../../shared/status-bar";

export interface FamilyRoomScreenProps extends NavigationScreenProps {
}

export interface FamilyRoomScreenState {
    content: any
}

export default class FamilyRoom extends React.Component<FamilyRoomScreenProps, FamilyRoomScreenState> {

    static navigationOptions = {
        title: 'FAMILY ROOM',
        headerStyle: HEADERSTYLEBLUE,
        headerTitleStyle: HEADERTITLESTYLEWHITE
    };

    public constructor(props) {
        super(props);
        this.state = {
            content: []
        };
        setStatusBar(this, "#1c5ca3");
    }

    onContentUpdate = (content: any) => {

        this.setState({
            content: content
        })
    };

    viewFunction = () => {
        const content = this.state.content;
        return (
            <View>
                <Text style={{padding: 20}}>
                    {content.text || "Content Unavailable Right Now"}
                </Text>
            </View>
        )
    };

    render() {

        return (
            <BaseScrollablePage
                back={"About"}
                contentLoad={"family-room"}
                onContentLoad={this.onContentUpdate}
                contentView={this.viewFunction}
                navigation={this.props.navigation}/>
        )
    }

}
