import React from 'react';
import {StatusBar, StyleSheet, View} from "react-native";
import {NavigationScreenProps} from "react-navigation";
import {Card, CardItem, Content, Text} from 'native-base';
import {mergeLinkText} from '../../link-text-merge/LinkTextMerge';
import BaseScrollablePage from "../../shared/ScrollablePage";
import g from '../../styles/global';
import {HEADERSTYLEWHITE, HEADERTITLESTYLEBLACK} from '../../shared/fonts';

interface AfterProps extends NavigationScreenProps {
}

interface AfterState {
    afterData: any
}

export default class After extends React.Component<AfterProps, AfterState> {

    public constructor(props) {
        super(props);
        this.state = {
            afterData: []
        }
    }

    onContentUpdate = (content: any) => {

        this.setState({
            afterData: content
        })

    };

    static navigationOptions = {
        title: 'AFTER YOUR STAY',
        headerStyle: HEADERSTYLEWHITE,
        headerTitleStyle: HEADERTITLESTYLEBLACK
    };

    viewFunction = () => {
        const afterData = this.state.afterData;
        return (
            <View style={main.container}>
                <StatusBar backgroundColor="#fff" barStyle="dark-content"/>
                <Content style={main.body}>
                    {
                        afterData.map((item, index) => {
                            return (
                                <Card key={index} style={g.card}>
                                    <CardItem bordered key={index} style={{borderRadius: 20}}>
                                        <View>
                                            <Text style={g.textType}>After Your Stay</Text>
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
            </View>
        )
    };

    render() {
        const overrideBGColor = {
            backgroundColor: "#638dc9"
        };

        return (<BaseScrollablePage contentView={this.viewFunction}
                                    navigation={this.props.navigation}
                                    onContentLoad={this.onContentUpdate}
                                    contentLoad={"afteryourstay"}
                                    containerStyle={overrideBGColor}
                                    back={"Faq"}/>
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
