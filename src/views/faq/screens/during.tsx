import React from 'react';
import {StyleSheet, View} from "react-native";
import {NavigationScreenProps} from "react-navigation";
import {Card, CardItem, Content, Text} from 'native-base';
import {mergeLinkText} from '../../link-text-merge/LinkTextMerge';
import BaseScrollablePage from "../../shared/ScrollablePage";
import g from '../../styles/global';
import {HEADERTITLESTYLEBLACK, HEADERSTYLEWHITE} from '../../shared/fonts';
import {setStatusBar} from "../../shared/status-bar";

interface DuringProps extends NavigationScreenProps {
}

interface DuringState {
    duringData: any
}

export default class During extends React.Component<DuringProps, DuringState> {

    public constructor(props) {
        super(props);
        this.state = {
            duringData: []
        };
        setStatusBar(this, "#ffffff");
    }

    onContentUpdate = (content: any) => {
        this.setState({
            duringData: content
        })
    };

    static navigationOptions = {
        title: 'DURING YOUR STAY',
        headerStyle: HEADERSTYLEWHITE,
        headerTitleStyle: HEADERTITLESTYLEBLACK
    };

    viewFunction = () => {
        const duringData = this.state.duringData;

        return (
            <View style={main.container}>
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
                                    contentLoad={"duringyourstay"}
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
