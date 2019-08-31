import React from 'react';
import {
    ActivityIndicator,
    StatusBar,
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    View,
    ViewStyle
} from "react-native";
import {spacing} from "../../components/shared/spacing";
import LeftArrow from '../../images/left_arrow.svg';
import {NavigationScreenProps} from "react-navigation";
import {ContentService} from "../../services/ContentService";
import {getStatusBar} from "../../components/shared/statusBar";
import BaseFooter from "../../components/base/footer";

const FULL: ViewStyle = {flex: 1, padding: 20};


export interface ThingsToDoProps extends NavigationScreenProps {

}

export interface ThingsToDoState {
    isLoading: boolean,
    things: any[]
}


export default class ThingsToDo extends React.Component<ThingsToDoProps, ThingsToDoState> {

    static navigationOptions = {
        title: 'Things To Do',
        headerTitleStyle: {
            fontSize: 20,
            color: '#ffffff'
        }
    };

    public constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            things: []
        }
    }

    componentDidMount(): void {
        ContentService.contentForPage("things-to-do")
            .then((result) => {
                    this.setState({
                        isLoading: false,
                        things: result.content.things
                    })
                }
            )
    }


    render() {

        const isLoading = this.state.isLoading;
        const things = this.state.things;

        if (isLoading) {
            return this.loadingComponent();
        } else {

            return (
                <View style={FULL}>
                    {
                        getStatusBar()
                    }
                    <View>
                        <TouchableOpacity style={{height: 50, flexDirection: 'row'}}
                                          onPress={() => this.props.navigation.navigate("Neighborhood")}>
                            <LeftArrow stle={{flex: 1}} width={20} height={20}/>
                            <Text style={{flex: 1, marginLeft: 5}}>Back</Text>
                        </TouchableOpacity>

                        <View>
                            {
                                things.map(c => {
                                    return (
                                        this.thingToDo(c)
                                    )
                                })
                            }
                        </View>
                    </View>
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

    private thingToDo(c: any) {
        return (
            <View key={c.id} style={ROW}>
                <Text style={CONTENTSTYLE}>{c.content}</Text>
                <Text style={LINKSTYLE}>{c.exLink}</Text>
            </View>
        )
    }
}

const CONTENTSTYLE: TextStyle = {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
    marginBottom: 5,
};

const LINKSTYLE: TextStyle = {
    color: "#0078d7",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
    marginBottom: 15
};

const ROW: ViewStyle = {
    marginTop: spacing[5]
};

const main = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 20,
        top: 50
    }
});

