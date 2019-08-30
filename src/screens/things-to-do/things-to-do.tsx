import React from 'react';
import {StatusBar, Text, TextStyle, TouchableOpacity, View, ViewStyle} from "react-native";
import {Header} from "../../components/header/header";
import {spacing} from "../../components/shared/spacing";
import LeftArrow from '../../images/left_arrow.svg';

const FULL: ViewStyle = {flex: 1, padding: 20};

const CONTENT = {
    header: "Things to Do in Columbus",
    things: [
        {
            content: "Find events, museums, and places to visit around Columbus by visiting Experience Columbus:",
            exLink: "https://www.experiencecolumbus.com"
        }
    ]
};


export default class ThingsToDo extends React.Component {

    static navigationOptions = {
        title: 'Things To Do',
    };


    render() {
        return (
            <View style={FULL}>
                <StatusBar backgroundColor="#4872ae" barStyle="dark-content"/>
                <View>
                    <TouchableOpacity style={{height: 50, flexDirection: 'row'}}
                                      onPress={() => this.props.navigation.navigate("Neighborhood")}>
                        <LeftArrow stle={{flex: 1}} width={20} height={20}></LeftArrow>
                        <Text style={{flex: 1, marginLeft: 5}}>Back</Text>
                    </TouchableOpacity>


                    <View>
                        <Text style={TITLE}>
                            {CONTENT.header}
                        </Text>
                        {
                            CONTENT.things.map(c => {
                                return (
                                    this.thingToDo(c)
                                )
                            })
                        }
                    </View>
                </View>
            </View>
        );
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

const BOLD: TextStyle = {fontWeight: "bold"};

const CONTENTSTYLE : TextStyle = {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
    marginBottom: 5,
};

const LINKSTYLE : TextStyle = {
    color: "#0078d7",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
    marginBottom: 15
};

const TITLE: TextStyle = {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
    marginBottom: 20
};

const ROW: ViewStyle = {
    marginTop: spacing[5]
};

const LINK: TextStyle = {
    marginBottom: spacing[5]
};

