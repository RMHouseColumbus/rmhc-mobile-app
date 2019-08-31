import React from 'react';
import {ActivityIndicator, StatusBar, StyleSheet, Text, View} from 'react-native';
import {Card, CardItem, Container, Content} from 'native-base'
import BaseFooter from './footer.js'
import {ContentService} from "../../services/ContentService";
import {NavigationNavigatorProps} from "react-navigation";


export interface UpdateState {
    isLoading: boolean,
    content: any
}

export interface UpdateProps extends NavigationNavigatorProps {
}

export default class Updates extends React.Component<UpdateProps, UpdateState> {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            content: []
        }

    }

    componentDidMount(): void {
        ContentService.contentForPage("updates")
            .then((result) => {
                    this.setState({
                        isLoading: false,
                        content: result.content
                    })
                }
            )
    }


    static navigationOptions = {

        title: 'Updates',
        headerStyle: {
            backgroundColor: '#FFFFFF',
        },
        headerTitleStyle: {
            color: '#000000',
            fontFamily: "System",
            fontSize: 35,
        },
    };

    render() {
        const isLoading = this.state.isLoading;
        const content = this.state.content;

        if (isLoading) {
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
        } else {
            return (
                <React.Fragment>
                    <View style={{flex: 10}}>
                        <StatusBar barStyle="dark-content" style={{color: "#FFFFFF"}} backgroundColor="#FFFFFF"/>
                        <Container>

                            <Content style={main.body}>

                                {
                                    content.map((item, index) => {
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
                    </View>

                    <View style={{flex: 1}}>
                        <BaseFooter navigation={this.props.navigation}/>
                    </View>
                </React.Fragment>
            )
        }

    }
}

const main = StyleSheet.create({
    container: {
        flex: 1,
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
    body: {flex: 10, backgroundColor: "#638dc9"},
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
