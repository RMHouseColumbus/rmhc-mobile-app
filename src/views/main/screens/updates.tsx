import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card, CardItem, Content} from 'native-base'
import {NavigationScreenProps} from "react-navigation";
import BaseScrollablePage from "../../shared/ScrollablePage";

import g from '../../styles/global';

import {HEADERSTYLEWHITE, HEADERTITLESTYLEBLACK} from '../../shared/fonts';
import {setStatusBar} from "../../shared/status-bar";
import {mergeLinkText} from "../../link-text-merge/LinkTextMerge";


export interface UpdateState {
    content: any[]
}

export interface UpdateProps extends NavigationScreenProps {
}

export default class Updates extends React.Component<UpdateProps, UpdateState> {
    constructor(props) {
        super(props);
        this.state = {
            content: []
        };
        setStatusBar(this, "#ffffff", 'dark-content');
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

    contentEmpty = () => {
        const cardStyle = {
            ...g.card
        };
        return (
            <Content style={main.body}>
                <Card key={0} style={cardStyle}>
                    <CardItem bordered key={1} style={{borderRadius: 20}}>
                        <View>
                            <Text style={g.textContent}>No Updates</Text>
                        </View>
                    </CardItem>
                </Card>
            </Content>
        )
    }

    contentAvail = (content: any[]) => {
        const cardStyle = {
            ...g.card
        };
        return <Content style={main.body}>
            {
                content.map((item, index) => {
                    return (
                        <Card key={index} style={cardStyle}>
                            <CardItem bordered key={index} style={{borderRadius: 20}}>
                                <View>
                                    <Text style={g.textType}>{item.type}</Text>
                                    <Text style={g.textTitle}>{item.title}</Text>
                                    {
                                        mergeLinkText(item.text, item.links, g.textContent)
                                    }
                                </View>
                            </CardItem>
                        </Card>
                    )
                })
            }
        </Content>

    }

    viewFunction = () => {
        const content = this.state.content;
        const hasContent = content ? content.length > 0 : false;

        return (
            <View style={main.container}>
                {
                    hasContent ? this.contentAvail(content) : this.contentEmpty()
                }
            </View>
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
        flex: 1
    },
    text: {
        fontFamily: "Raleway-Regular",
        fontSize: 20,
        color: 'black'
    },
    body: {flex: 10, backgroundColor: "#638dc9"},
});
