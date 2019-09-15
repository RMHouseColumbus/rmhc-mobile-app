import * as React from "react";
import {NavigationScreenProps} from "react-navigation";
import {mergeLinkText} from "../../link-text-merge/LinkTextMerge";
import BaseScrollablePage from "../../shared/ScrollablePage";
import {View} from "react-native";
import { HEADERTITLESTYLE, HEADERSTYLE, HEADERSTYLEBLUE, HEADERTITLESTYLEWHITE } from "../../shared/fonts";


export interface CareMobileScreenProps extends NavigationScreenProps {
}

export interface CareMobileScreenState {
    content: any
}

export default class CareMobile extends React.Component<CareMobileScreenProps, CareMobileScreenState> {

    static navigationOptions = {
        title: 'CARE MOBILE',
        headerStyle: HEADERSTYLEBLUE,
        headerTitleStyle: HEADERTITLESTYLEWHITE
    };

    public constructor(props) {
        super(props);
        this.state = {
            content: {
                text: "Content is Unavailable",
                links: {}
            }
        }
    }

    onContentUpdate = (content: any) => {
        this.setState({
            content: content
        })
    };

    viewFunction = () => {
        const content = this.state.content || "Content is Unavailable";
        return (
            <View style={{padding: 20}}>
                {mergeLinkText(content.text, content.links)}
            </View>
        );
    };

    render() {
        return (
            <BaseScrollablePage
                back={"About"}
                contentLoad={"care-mobile"}
                onContentLoad={this.onContentUpdate}
                contentView={this.viewFunction}
                navigation={this.props.navigation}/>
        )
    }

}
