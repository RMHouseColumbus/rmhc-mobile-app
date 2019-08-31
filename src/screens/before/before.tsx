import React from 'react';
import { ViewStyle, View, TouchableOpacity, StatusBar, ActivityIndicator, StyleSheet } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { ContentService } from '../../services/ContentService';
import { Text, Container, Content, Card, CardItem } from 'native-base';
import LeftArrow from '../../images/left_arrow.svg';
import { getStatusBar } from '../../components/shared/statusBar';
import { CONTENTSTYLE, LINKSTYLE, TEXTSTYLE } from '../../components/shared/fonts';
import { spacing } from "../../components/shared/spacing";
import BaseFooter from './footer.js'


const FULL: ViewStyle = {
    flex: 1,
    padding: 20
};

interface BeforeProps extends NavigationScreenProps{}

interface BeforeState {
    isLoading: boolean,
    beforeData: any
}

export default class Before extends React.Component<BeforeProps, BeforeState> {

    public constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            beforeData: []
        }
    }

    componentDidMount(): void {
        ContentService.contentForPage("beforeyourstay")
            .then((result) => {
                this.setState({
                    isLoading: false,
                    beforeData: result.content
                })
            }
        );
    }

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

    render(){

        const isLoading = this.state.isLoading;
        const beforeData = this.state.beforeData;
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
                        <StatusBar barStyle="dark-content" style={{color: "#FFFFFF"}} backgroundColor="#FFFFFF"/>
                        <Container>
                            <Content style={main.body}>
                                {
                                    beforeData.map((item, index) => {
                                        return (
                                            <Card key={index} style={main.card}>
                                                <CardItem bordered key={index} style={{borderRadius: 20}}>
                                                    <View>
                                                        <Text style={main.textType}>Before Your Stay</Text>
                                                        <Text style={main.textTitle}>{item.question}</Text>
                                                        <Text style={main.textContent}>{item.answer}</Text>
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