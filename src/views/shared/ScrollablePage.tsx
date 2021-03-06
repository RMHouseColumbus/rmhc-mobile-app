import * as React from "react";
import {
    ActivityIndicator,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ViewStyle
} from "react-native";
import {NavigationScreenProps} from "react-navigation";
import LeftArrow from "../../images/left_arrow.svg";
import BaseFooter from "../shared/footer";
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
    containerStyle?: ViewStyle;
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
            <TouchableOpacity style={baseBackStyle}
                              onPress={goBack}>
                <LeftArrow width={35} height={20} style={{marginTop: '1%'}}/>
                <Text style={{flex: 1, marginLeft: 5, fontSize: 20}}>Back</Text>
            </TouchableOpacity>
        )
    }

    render() {
        const isLoading = this.state.isLoading;
        const scrollViewStyle = {
            ...baseScrollViewStyle,
            ...this.props.containerStyle
        };

        if (isLoading) {
            return this.loadingComponent();
        } else {
            return (
                <View style={FULL}>
                    <ScrollView style={scrollViewStyle}>
                        {this.backButton()}

                        {
                            this.props.contentView()
                        }

                    </ScrollView>
                    <View style={main.footer}>
                        {this.getFooter()}
                    </View>
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
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={main.container}>
                        <ActivityIndicator/>
                    </View>
                </View>
            </View>
        )
    }

}


const baseScrollViewStyle: ViewStyle = {
    flex: 9
};

const baseBackStyle: ViewStyle = {
    flexDirection: 'row',
    margin: 20,
};

const main = StyleSheet.create({
    container: {
        flex: 1,
        margin: 0,
    },
    footer: {
        minHeight: 63,
        maxHeight: 63,
    }
});
