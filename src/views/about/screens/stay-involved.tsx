import * as React from "react";
import {ContentService} from "../../../services/ContentService";
import {
    ActivityIndicator,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    View,
    ViewStyle
} from "react-native";
import {getStatusBar} from "../../shared/statusBar";
import BaseFooter from '../../shared/footer';
import {NavigationScreenProps} from "react-navigation";
import LeftArrow from "../../../images/left_arrow.svg";
import {spacing} from "../../shared/spacing";
import {mergeLinkText} from "../../link-text-merge/LinkTextMerge";

const FULL: ViewStyle = {
    flex: 1,
    padding: 20
};


export interface StayInvolvedScreenProps extends NavigationScreenProps {
}

export interface StayInvolvedScreenState {
    isLoading: boolean,
    content: any
}

export default class StayInvolved extends React.Component<StayInvolvedScreenProps, StayInvolvedScreenState> {

    static navigationOptions = {
        title: 'STAY INVOLVED',
    };

    public constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            content: []
        }
    }

    componentDidMount(): void {

        ContentService.contentForPage("stay-involved")
            .then((result) => {
                    this.setState({
                        isLoading: false,
                        content: result.content
                    })
                }
            )
    }


    render() {
        const isLoading = this.state.isLoading;
        const content = this.state.content['values'] || "Content is Unavailable";
        const paratext = this.state.content.main;

        if (isLoading) {
            return this.loadingComponent();
        } else {

            return (
                <View style={FULL}>
                    {
                        getStatusBar()
                    }
                    <ScrollView >
                        <TouchableOpacity style={{flexDirection: 'row'}}
                                          onPress={() => this.props.navigation.navigate("About")}>
                            <LeftArrow stle={{flex: 1}} width={20} height={20}></LeftArrow>
                            <Text style={{flex: 1, marginLeft: 5}}>Back</Text>
                        </TouchableOpacity>
                        <View style={{marginTop: 25}}>
                            <Text>
                                {paratext}
                            </Text>
                            <View>
                                {
                                    content.map(c => {
                                        return (
                                            <View style={SECTION}>
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
                    </ScrollView>
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

}

const main = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 20,
        top: 50
    }
});


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