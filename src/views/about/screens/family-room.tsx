import * as React from "react";
import {ContentService} from "../../../services/ContentService";
import {
    ActivityIndicator,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ViewStyle
} from "react-native";
import {getStatusBar} from "../../shared/statusBar";
import BaseFooter from '../../shared/footer';
import {NavigationScreenProps} from "react-navigation";
import LeftArrow from "../../../images/left_arrow.svg";
import {mergeLinkText} from "../../link-text-merge/LinkTextMerge";

const FULL: ViewStyle = {
    flex: 1,

};


export interface FamilyRoomScreenProps extends NavigationScreenProps {
}

export interface FamilyRoomScreenState {
    isLoading: boolean,
    content: any
}

export default class FamilyRoom extends React.Component<FamilyRoomScreenProps, FamilyRoomScreenState> {

    static navigationOptions = {
        title: 'FAMILY ROOM',
    };

    public constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            content: []
        }
    }

    componentDidMount(): void {

        ContentService.contentForPage("family-room")
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
        const content = this.state.content;

        if (isLoading) {
            return this.loadingComponent();
        } else {

            return (
                <View style={FULL}>
                    {
                        getStatusBar()
                    }
                    <ScrollView style={{flex: 0.9}}>

                            <TouchableOpacity style={{height: 50, flexDirection: 'row'}}
                                              onPress={() => this.props.navigation.navigate("About")}>
                                <LeftArrow stle={{flex: 1}} width={20} height={20}></LeftArrow>
                                <Text style={{flex: 1, marginLeft: 5}}>Back</Text>
                            </TouchableOpacity>
                            <Text>
                                {content.text || "Content Unavailable Right Now"}
                            </Text>

                    </ScrollView>
                    <View style={{ flex: 0.1 }}>
                    <BaseFooter style={{flex: .1}} navigation={this.props}/>
                    </View>
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