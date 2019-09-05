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

const FULL: ViewStyle = {
    flex: 1,

};


export interface StaffScreenProps extends NavigationScreenProps {
}

export interface StaffScreenState {
    isLoading: boolean,
    content: any
}

export default class StaffScreen extends React.Component<StaffScreenProps, StaffScreenState> {

    static navigationOptions = {
        title: 'STAFF',
    };

    public constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            content: []
        }
    }

    componentDidMount(): void {

        ContentService.contentForPage("staff")
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
                            {"Staff Content Here"}
                        </Text>

                    </ScrollView>
                    <View style={{flex: 0.1}}>
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