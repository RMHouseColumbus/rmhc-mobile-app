import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card, CardItem, Container, Content} from 'native-base'
import {NavigationScreenProps} from "react-navigation";
import BaseScrollablePage from "../../base-page/ScrollablePage";
import g from '../../styles/global';

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

        title: 'Updates',
        headerStyle: {
            backgroundColor: '#FFFFFF',
        },
        headerTitleStyle: {
            color: '#000000',
            fontFamily: "System",
            fontSize: 20,
            textAlign: 'center'
        }
    };

    viewFunction = () => {
        const content = this.state.content;
        return (
            <Container>
                <Content style={main.body}>
                    {
                        content.map((item, index) => {
                            return (
                                <Card key={index} style={g.card}>
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
        fontFamily: "System",
        fontSize: 20,
        color: 'black'
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
