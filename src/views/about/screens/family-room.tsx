import * as React from "react";
import {Text} from "react-native";
import {NavigationScreenProps} from "react-navigation";
import BaseScrollablePage from "../../base-page/ScrollablePage";

export interface FamilyRoomScreenProps extends NavigationScreenProps {
}

export interface FamilyRoomScreenState {
    content: any
}

export default class FamilyRoom extends React.Component<FamilyRoomScreenProps, FamilyRoomScreenState> {

    static navigationOptions = {
        title: 'FAMILY ROOM',
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
        const content = this.state.content;
        return (
            <Text  style={{padding: 20}}>
                {content.text || "Content Unavailable Right Now"}
            </Text>
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
