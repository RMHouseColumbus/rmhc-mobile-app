import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {Card, CardItem, Container, Content} from 'native-base'
import {NavigationScreenProps} from "react-navigation";
import BaseScrollablePage from "../../shared/ScrollablePage";

import g from '../../styles/global';

import { HEADERSTYLEWHITE, HEADERTITLESTYLEBLACK } from '../../shared/fonts';



export interface UpdateState {
    content: any
}

export interface UpdateProps extends NavigationScreenProps {
}

export default class Updates extends React.Component<UpdateProps, UpdateState> {
    constructor(props) {
        super(props);
        this.state = {
            content: []
        }

    }

    onContentUpdate = (content: any) => {
        this.setState({
            content: content
        })
    };

    static navigationOptions = {

        title: 'UPDATES',
        headerStyle: HEADERSTYLEWHITE,
        headerTitleStyle: HEADERTITLESTYLEBLACK
    };

    viewFunction = () => {
        const content = this.state.content;
        const cardStyle = {
            ...g.card,
            top: '2%'
        };
        return (
            <Container>
                <StatusBar backgroundColor="#fff" barStyle="dark-content"/>
                <Content style={main.body}>
                    {
                        content.map((item, index) => {
                            return (
                                <Card key={index} style={cardStyle}>
                                    <CardItem bordered key={index} style={{borderRadius: 20}}>
                                        <View>
                                            <Text style={g.textType}>{item.type}</Text>
                                            <Text style={g.textTitle}>{item.title}</Text>
                                            <Text style={g.textContent}>{item.text}</Text>
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

        return (
            <BaseScrollablePage contentView={this.viewFunction}
                                navigation={this.props.navigation}
                                onContentLoad={this.onContentUpdate}
                                contentLoad={"updates"}
            />
        )
    }
}

const main = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 20,
        top: 50
    },
    text: {
        fontFamily: "Raleway-Regular",
        fontSize: 20,
        color: 'black'
    },
    body: {flex: 10, backgroundColor: "#638dc9"},
});
