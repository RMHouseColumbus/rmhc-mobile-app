import React from 'react';
import { Text, TextStyle, View, ViewStyle } from "react-native"
import { spacing } from "../../components/shared/spacing";
import { Header } from "../../components/header/header";

const FULL: ViewStyle = { flex: 1 };

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
                <View>
                    <Header titleStyle={TITLE} leftIcon={'back'} headerText={CONTENT.header}/>
                    <View>
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
                <Text>{c.content}</Text>
                <Text style={LINK}>{c.exLink}</Text>
            </View>
        )
    }
}

const BOLD: TextStyle = { fontWeight: "bold" };

const TITLE: TextStyle = {
    ...BOLD,
    fontSize: 15,
    lineHeight: 38,
    textAlign: "center",
    marginBottom: spacing[5],
};

const ROW: ViewStyle = {
    marginTop: spacing[5]
};

const LINK: TextStyle = {
    marginTop: spacing[5]
};

