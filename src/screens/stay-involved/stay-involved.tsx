import * as React from "react";
import {ContentService} from "../../services/ContentService";
import {ActivityIndicator, StatusBar, StyleSheet, Text, TouchableOpacity, View, ViewStyle} from "react-native";
import {getStatusBar} from "../../components/shared/statusBar";
import BaseFooter from "../../components/base/footer";
import {NavigationScreenProps} from "react-navigation";
import LeftArrow from "../../images/left_arrow.svg";
import {TITLE} from "../../components/shared/fonts";



//     Ronald McDonald Family Room Volunteers
// The Ronald McDonald Family Room at OhioHealth Riverside Methodist Hospital serves as a respite for mothers-to-be and families with babies & children receiving medical care at the hospital. We provide a relaxed space for guests to grab a snack or drink, take a shower, do a load of laundry, or take a quick break just a short distance from the inpatient’s room. To learn more about volunteering at the family room, or to apply to volunteer at this location, click here.
//     Community Service Hours: If you need to complete service hours for an educational requirement you can do so through our welcome blanket or baking programs. RMHC does not accept volunteers completing court-ordered community service at this time.
//     For more information, please email Meika.Hilles@rmhc-centralohio.org, Volunteer
// Manager.
//
//     Current Volunteers: Click here to access the scheduling system.

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

        if (isLoading) {
            return this.loadingComponent();
        } else {

            return (
                <View style={FULL}>
                    {
                        getStatusBar()
                    }
                    <View>
                        <View>
                            <TouchableOpacity style={{height: 50, flexDirection: 'row'}}
                                              onPress={() => this.props.navigation.navigate("About")}>
                                <LeftArrow stle={{flex: 1}} width={20} height={20}></LeftArrow>
                                <Text style={{flex: 1, marginLeft: 5}}>Back</Text>
                            </TouchableOpacity>
                            <Text>
                                {content.text}
                            </Text>
                            <View style={{marginTop: 20}}>
                                {
                                    content.values.map(c => {
                                        return (
                                            [<Text style={TITLE}>
                                                {c.title}
                                            </Text>,
                                                <Text>{c.content}</Text>
                                            ]
                                        )
                                    })
                                }
                            </View>
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

}

const main = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 20,
        top: 50
    }
});