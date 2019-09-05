import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card, CardItem, Container, Content} from 'native-base'
import {NavigationScreenProps} from "react-navigation";
import BaseScrollablePage from "../../base-page/ScrollablePage";

interface ActivitiesState {
    activities: any
}

export interface ActivityProps extends NavigationScreenProps {
}


export default class Activities extends React.Component<ActivityProps, ActivitiesState> {
    constructor(props) {
        super(props);
        this.state = {
            activities: []
        }
    }

    static navigationOptions = {

        title: 'Activities',
        headerStyle: {
            backgroundColor: '#FFFFFF',
        },
        headerTitleStyle: {
            color: '#000000',
            fontFamily: "System",
            fontSize: 35,
        },

    };

    onContentUpdate = (content: any) => {

        this.setState({
            activities: content
        });

    };

    viewFunction = () => {
        const {activities} = this.state;

        return (
            <Container>

                <Content style={main.body}>


                    {
                        activities.map((item, index) => {
                            return (
                                <Card key={index} style={main.card}>
                                    <CardItem bordered key={index} style={{borderRadius: 20}}>
                                        <View>
                                            <Text style={main.textType}>{item.type}</Text>
                                            <Text style={main.textTitle}>{item.title}</Text>
                                            <Text style={main.textContent}>{item.text}</Text>
                                        </View>
                                    </CardItem>
                                </Card>
                            )
                        })
                    }
                </Content>
            </Container>
        )
    };


    render() {
        return (<BaseScrollablePage contentView={this.viewFunction}
                                    navigation={this.props.navigation}
                                    onContentLoad={this.onContentUpdate}
                                    contentLoad={"activities"}/>
        )

    }
}

const main = StyleSheet.create({
    container: {
        flex: 10,
        marginLeft: 20,
        top: 50
    },
    text: {
        fontFamily: "System",
        fontSize: 20,
        color: 'black'
    },
    card: {
        marginLeft: "7%",
        marginRight: "7%",
        top: "2%",
        width: "86%"
    },
    body: {flex: 1, backgroundColor: "#638dc9"},
    textType: {
        fontFamily: "System",
        fontSize: 12,
        color: 'black'
    },
    textTitle: {
        fontFamily: "System",
        fontSize: 20,
        color: 'black',
        fontWeight: "bold"
    },
    textContent: {
        marginTop: "1%",
        fontFamily: "System",
        fontSize: 14,
        color: 'black'
    },
});
