import React from 'react';
import { StyleSheet, Text, View, StatusBar, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import { Button } from 'native-base';
import Pdf from 'react-native-pdf';
import BaseFooter from '../base/footer.js'

export default class Facilities extends React.Component {
    static navigationOptions = {
        title: 'Facilities',
    }

    render() {
        return (
            <View style={styles.main}>
                <StatusBar backgroundColor="#4872ae" barStyle="light-content" />
                <View style={{ flex: 0.9 }}>
                    <ImageBackground source={require('./floorplanbackground.jpg')} style={{ width: '100%', height: '100%' }} />
                    <View style={styles.floorPlanBackground} />
                    <View style={styles.floorPlanTextContainer}>
                        <Text style={styles.floorPlanText}>FLOOR PLAN</Text>
                        <Button style={styles.floorPlanButton} onPress={() => this.props.navigation.navigate("FloorPlan")}>
                            <Text style={styles.TextStyle}>View PDF</Text>
                        </Button>
                    </View>
                </View>
                <View style={{ flex: 0.1 }}>
                    <BaseFooter navigation={this.props.navigation} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1, backgroundColor: "#F1F1F1"
    },
    container: {
        flex: 1,
        marginLeft: 20,
        top: 50
    },
    welcomeText: {
        fontFamily: "System",
        fontSize: 45,
        color: 'black'
    },
    floorPlanBackground: { borderColor: 'black', borderWidth: 5, width: '60%', height: '40%', backgroundColor: '#FFFFFF', position: 'absolute', top: '35%', left: '17%', opacity: 0.85 },
    floorPlanTextContainer: { justifyContent: 'center', alignItems: 'center', width: 120, position: 'absolute', top: '39%', left: '33%' },
    floorPlanText: { fontSize: 35, fontWeight: "bold", textAlign:'center',justifyContent:'center',},
    floorPlanButton: {
        top:'20%',
        textAlign:'center',
        justifyContent:'center',
        width:120,
        borderRadius:10,
        backgroundColor: '#FCC300',

    },
    TextStyle: {
        color: '#000000',
        textAlign: 'center',
        fontSize: 20
    }
});