import * as React from "react";
import {Text, TextStyle, View, ViewStyle} from "react-native";
import {NavigationScreenProps} from "react-navigation";
import {spacing} from "../../shared/spacing";
import {mergeLinkText} from "../../link-text-merge/LinkTextMerge";
import ScrollablePage from "../../base-page/ScrollablePage";
import { HEADERTITLESTYLE, HEADERSTYLE } from "../../shared/fonts";

export interface StayInvolvedScreenProps extends NavigationScreenProps {
}

export interface StayInvolvedScreenState {
    content: any
}

export default class StayInvolved extends React.Component<StayInvolvedScreenProps, StayInvolvedScreenState> {

    static navigationOptions = {
        title: 'STAY INVOLVED',
        headerStyle: HEADERSTYLE,
        headerTitleStyle: HEADERTITLESTYLE
    };

    public constructor(props) {
        super(props);
        this.state = {
            content: {
                values : [],
                main: "Content is Unavailable"
            }
        }
    }

    onContentLoad = (content: any) => {
        this.setState({
            content: content
        })
    };

    viewFunction: () => any = () => {
        const vals = this.state.content['values'];
        const paratext = this.state.content.main;

        return (
            <View  style={{padding: 20}}>
                <Text>
                    {paratext}
                </Text>
                <View>
                    {
                        vals.map(c => {
                            return (
                                <View style={SECTION} key={c.title}>
                                    <Text style={INVOLVED_TITLE}>
                                        {c.title}
                                    </Text>
                                    {
                                        mergeLinkText(c.content, c.links)
                                    }
                                </View>
                            )
                        })
                    }
                </View>
            </View>
        )
    };

    render() {


        return (

            <ScrollablePage
                back={"About"}
                contentLoad={"stay-involved"}
                navigation={this.props.navigation}
                onContentLoad={this.onContentLoad}
                contentView={this.viewFunction}
            />
        )


    }

}


const SECTION: ViewStyle = {
    marginTop: spacing[3]
};


export const INVOLVED_TITLE: TextStyle = {
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0,
    marginBottom: 10
};
