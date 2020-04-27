import React from 'react';
import {Dimensions, Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Grid, Row} from 'native-base';
import {NavigationScreenProps} from 'react-navigation';
import BaseFooter from '../../shared/footer';
import Logo from '../../../images/logo_landscape.svg';
import Henry from '../../../images/landing_new.svg';
import {HEADERSTYLEBLUE} from '../../shared/fonts';
import SplashScreen from 'react-native-splash-screen';
import {setStatusBar} from '../../shared/status-bar';


export interface HomeScreenProps extends NavigationScreenProps {
}

const YOUTUBE_LINK = "https://youtu.be/9ypZmfHSiXg";

export default class Home extends React.Component<HomeScreenProps, {}> {


    static navigationOptions = {
        title: 'RMHC Central Ohio',
        headerStyle: HEADERSTYLEBLUE,
        headerTitleStyle: {
            color: `#FFFFFF`,
            fontSize: 28,
            fontFamily: "Raleway-Regular",
            width: Dimensions.get('window').width
        }
    };

    componentDidMount() {
        SplashScreen.hide();
        setStatusBar(this, "#1c5ca3", 'light-content');
    }

    private onClickOfYourState = () => {
        this.props.navigation.navigate("Faq");
    };

    render() {
        return (
            <View style={styles.main}>

                <Grid style={{flex: 4}}>
                    <Row>
                        <Text style={styles.welcomeText}>Welcome To</Text>
                    </Row>
                    <Row style={{alignSelf: 'center'}}>
                        <Logo style={{flex: 1, alignSelf: 'center', position: 'relative', marginBottom: '1%'}}/>
                    </Row>
                </Grid>
                <View style={styles.henry}>
                    <Henry width={'100%'} height={'100%'} onPress={() => Linking.openURL(YOUTUBE_LINK)} />
                        <TouchableOpacity style={styles.invisibleBox} onPress={this.onClickOfYourState}>
                            <Text style={StyleSheet.absoluteFillObject} />
                        </TouchableOpacity>
                </View>
                <View style={styles.footer}>
                    <BaseFooter navigation={this.props.navigation}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    henry: {flex: 6, position: 'relative', top: '5%', zIndex: -100},
    main: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 0
    },
    container: {
        flex: 1,
    },
    welcomeText: {
        flex: 1,
        alignSelf: 'center',
        fontSize: 33,
        fontWeight: "600",
        fontStyle: "normal",
        fontFamily: 'Raleway',
        letterSpacing: 0,
        textAlign: "center",
        color: '#da291c'
    },
    footer: {
        minHeight: 63,
        maxHeight: 63,
        flex: 5
        , position: 'relative',
        bottom: -.20
    },
    invisibleBox: {
        flex: 1,
        backgroundColor: "transparent",
        alignSelf: 'center',
        zIndex: 1000,
        width: "100%",
        height: "49%",
        position: 'absolute',
        bottom: '0%'
    }
});
