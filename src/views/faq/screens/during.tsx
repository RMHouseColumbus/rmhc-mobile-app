import React from 'react';
import {StyleSheet, View} from "react-native";
import {NavigationScreenProps} from "react-navigation";
import {Card, CardItem, Container, Content, Text} from 'native-base';
import {mergeLinkText} from '../../link-text-merge/LinkTextMerge';
import BaseScrollablePage from "../../base-page/ScrollablePage";
import g from '../../styles/global';
import { HEADERTITLESTYLEBLACK, HEADERSTYLEWHITE } from '../../shared/fonts';

interface BeforeProps extends NavigationScreenProps {
}

interface BeforeState {
    duringData: any
}

export default class Before extends React.Component<BeforeProps, BeforeState> {

    public constructor(props) {
        super(props);
        this.state = {
            duringData: []
        }
    }

    onContentUpdate = (content: any) => {
        this.setState({
            duringData: content
        })
    };

    static navigationOptions = {
        title: 'During Your Stay',
        headerStyle: HEADERSTYLEWHITE,
        headerTitleStyle: HEADERTITLESTYLEBLACK
    };

    viewFunction = () => {
        const duringData = this.state.duringData;

        return (
            <Container>
                <Content style={main.body}>
                    {
                        duringData.map((item, index) => {
                            return (
                                <Card key={index} style={g.card}>
                                    <CardItem bordered key={index} style={{borderRadius: 20}}>
                                        <View>
                                            <Text style={g.textType}>During Your Stay</Text>
                                            <Text style={g.textTitle}>{item.question}</Text>
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
                                    contentLoad={"duringyourstay"}
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
});
