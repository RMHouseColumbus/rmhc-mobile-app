import React from 'react';
import { ViewStyle, View, TouchableOpacity, StatusBar, ActivityIndicator, StyleSheet } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { ContentService } from '../../../services/ContentService';
import { Text, Container, Content, Card, CardItem } from 'native-base';
import LeftArrow from '../../../images/left_arrow.svg';
import { getStatusBar } from '../../shared/statusBar';
import { CONTENTSTYLE, LINKSTYLE, TEXTSTYLE } from '../../shared/fonts';
import { spacing } from "../../shared/spacing";
import BaseFooter from '../../shared/footer'
import { mergeLinkText } from '../../link-text-merge/LinkTextMerge';


const FULL: ViewStyle = {
    flex: 1,
    padding: 20
};

interface BeforeProps extends NavigationScreenProps{}

interface BeforeState {
    isLoading: boolean,
    duringData: any
}

export default class Before extends React.Component<BeforeProps, BeforeState> {

    public constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            duringData: []
        }
    }

    componentDidMount(): void {
        ContentService.contentForPage("duringyourstay")
            .then((result) => {
                this.setState({
                    isLoading: false,
                    duringData: result.content
                })
            }
        );
    }

    static navigationOptions = {
        title: 'During Your Stay',
        headerStyle: {
            backgroundColor: '#FFFFFF',
        },
        headerTitleStyle: {
            color: '#000000',
            fontFamily: "System",
            fontSize: 35,
        }
    };

    render(){

        const isLoading = this.state.isLoading;
        const duringData = this.state.duringData;
        const backTo = () => this.props.navigation.navigate("Faq");

        if (isLoading){
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
                        <View>
                            <TouchableOpacity style={{height: 50, flexDirection: 'row'}} onPress={backTo}>
                                <LeftArrow stle={{flex: 1}} width={20} height={20}/>
                                <Text style={{flex: 1, marginLeft: 5}}>Back</Text>
                            </TouchableOpacity>
                        </View>
                        <StatusBar barStyle="dark-content" style={{color: "#FFFFFF"}} backgroundColor="#FFFFFF"/>
                        <Container>
                            <Content style={main.body}>
                                {
                                    duringData.map((item, index) => {
                                        return (
                                            <Card key={index} style={main.card}>
                                                <CardItem bordered key={index} style={{borderRadius: 20}}>
                                                    <View>
                                                        <Text style={main.textType}>During Your Stay</Text>
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
                    </View>

                    
                </React.Fragment>
            )  
        }
    }    
}

const SECTION: ViewStyle = {
    marginTop: spacing[5]
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

// const SECTION: ViewStyle = {
//     marginTop: spacing[5]
// };