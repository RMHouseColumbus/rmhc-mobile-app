import * as React from "react";
import {ContentService} from "../../services/ContentService";
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
import {getStatusBar} from "../../components/shared/statusBar";
import BaseFooter from "../../components/base/footer";
import {NavigationScreenProps} from "react-navigation";
import LeftArrow from "../../images/left_arrow.svg";
import {mergeLinkText} from "../../components/link-text-merge/LinkTextMerge";

const FULL: ViewStyle = {
    flex: 1,
    padding: 20
};


export interface CareMobileScreenProps extends NavigationScreenProps {
}

export interface CareMobileScreenState {
    isLoading: boolean,
    content: any
}

export default class CareMobile extends React.Component<CareMobileScreenProps, CareMobileScreenState> {

    static navigationOptions = {
        title: 'CARE MOBILE',
    };

    public constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            content: []
        }
    }

    componentDidMount(): void {

        ContentService.contentForPage("care-mobile")
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
        const content = this.state.content || "Content is Unavailable";
        const merged = mergeLinkText(content.text, content.links);

        if (isLoading) {
            return this.loadingComponent();
        } else {

            return (
                <View style={FULL}>
                    {
                        getStatusBar()
                    }
                    <ScrollView>
                        <View>
                            <TouchableOpacity style={{height: 50, flexDirection: 'row'}}
                                              onPress={() => this.props.navigation.navigate("About")}>
                                <LeftArrow stle={{flex: 1}} width={20} height={20}></LeftArrow>
                                <Text style={{flex: 1, marginLeft: 5}}>Back</Text>
                            </TouchableOpacity>

                            {
                                merged
                            }

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