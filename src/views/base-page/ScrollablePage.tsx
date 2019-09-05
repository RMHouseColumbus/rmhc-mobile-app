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
    flex: 1,
    padding: 20
};


export interface BaseScreenProps extends NavigationScreenProps {
    back?: string,
    contentLoad?: string,
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
        if (!this.props.contentLoad) {
            this.setState({
                isLoading: false
            });
        } else {
            ContentService.contentForPage(this.props.contentLoad)
                .then((result) => {
                        this.setState({
                            isLoading: false
                        });
                        if (this.props.contentLoad) {
                            this.props.onContentLoad(result.content);
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
            <TouchableOpacity style={{flexDirection: 'row'}}
                              onPress={goBack}>
                <LeftArrow stle={{flex: 1}} width={20} height={20}/>
                <Text style={{flex: 1, marginLeft: 5}}>Back</Text>
            </TouchableOpacity>
        )
    }

    getFooter() {
        return (
            <View style={{flex: 0.1}}>
                <BaseFooter navigation={this.props.navigation}/>
            </View>
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
                    <ScrollView style={{flex: 0.9, marginBottom: 5}}>
                        {this.backButton()}
                        <View style={{marginTop: 10, padding: 5}}>
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
