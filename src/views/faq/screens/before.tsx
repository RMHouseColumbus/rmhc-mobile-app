import React from 'react';
import {StyleSheet, View} from "react-native";
import {NavigationScreenProps} from "react-navigation";
import {Card, CardItem, Container, Content, Text} from 'native-base';
import {mergeLinkText} from '../../link-text-merge/LinkTextMerge';
import BaseScrollablePage from "../../base-page/ScrollablePage";
import g from '../../styles/global';

interface BeforeProps extends NavigationScreenProps {
}

interface BeforeState {
    beforeData: any
}

export default class Before extends React.Component<BeforeProps, BeforeState> {

    public constructor(props) {
        super(props);
        this.state = {
            beforeData: []
        }
    }

    onContentUpdate = (content: any) => {
        this.setState({
            beforeData: content
        })
    };

    static navigationOptions = {
        title: 'Before Your Stay',
        headerStyle: {
            backgroundColor: '#FFFFFF',
        },
        headerTitleStyle: {
            color: '#000000',
            fontFamily: "System",
            fontSize: 35,
        }
    };

    viewFunction = () => {
        const beforeData = this.state.beforeData;
        return (
            <Container>
                <Content style={main.body}>
                    {
                        beforeData.map((item, index) => {
                            return (
                                <Card key={index} style={g.card}>
                                    <CardItem bordered key={index} style={{borderRadius: 20}}>
                                        <View>
                                            <Text style={main.textType}>Before Your Stay</Text>
                                            <Text style={main.textTitle}>{item.question}</Text>
                                            {
                                                mergeLinkText(item.answer, item.links)
                                            }
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
                                    contentLoad={"beforeyourstay"}
                                    back={"Faq"}/>
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
