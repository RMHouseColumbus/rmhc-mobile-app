import * as React from "react";
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
import {NavigationScreenProps} from "react-navigation";
import LeftArrow from "../../images/left_arrow.svg";
import BaseFooter from "../shared/footer";
import {getStatusBar} from "../shared/statusBar";
import {ContentService} from "../../services/ContentService";

const FULL: ViewStyle = {
    flex: 1
};


export interface BaseScreenProps extends NavigationScreenProps {
    back?: string,
    contentLoad?: string
    contentFunction?: () => Promise<any>
    onContentLoad?: (content: any) => void,
    contentView: () => any;
}

export interface BaseScreenState {
    isLoading: boolean
}

export default class BaseScrollablePage extends React.Component<BaseScreenProps, BaseScreenState> {


    public constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount(): void {
        // no content to load
        if (!this.props.contentLoad && !this.props.contentFunction) {
            this.setState({
                isLoading: false
            });
        } else {
            // user page function or passed in function
            const contentFunction = this.props.contentLoad ? ContentService.contentForPage(this.props.contentLoad) : this.props.contentFunction();
            contentFunction.then((result) => {
                    this.setState({
                        isLoading: false
                    });
                    if (this.props.onContentLoad) {
                        const resolve = this.props.contentLoad ? result.content : result;
                        this.props.onContentLoad(resolve);
                    }
                }
            )
        }
    }

    backButton() {
        if (!this.props.back) {
            return <></>
        }
        const goBack = () => this.props.navigation.navigate(this.props.back);

        return (
            <TouchableOpacity style={{flexDirection: 'row', margin: 20}}
                              onPress={goBack}>
                <LeftArrow stle={{flex: 1}} width={20} height={20}/>
                <Text style={{flex: 1, marginLeft: 5}}>Back</Text>
            </TouchableOpacity>
        )
    }
    render() {
        const isLoading = this.state.isLoading;

        if (isLoading) {
            return this.loadingComponent();
        } else {
            return (
                <View style={FULL}>
                    {
                        getStatusBar()
                    }
                    <ScrollView style={{flex: 9, marginBottom: 25}}>
                        {this.backButton()}
                        <View>
                            {
                                this.props.contentView()
                            }
                        </View>
                    </ScrollView>
                    {this.getFooter()}
                </View>
            )
        }
    }

    getFooter() {
        return (
            <BaseFooter navigation={this.props.navigation}/>
        )
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
        margin: 0,
        // top: 50
    }
});
