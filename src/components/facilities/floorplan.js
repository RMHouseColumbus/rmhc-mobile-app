import React from 'react';
import { StyleSheet, Text, View, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import Pdf from 'react-native-pdf';
import Facilities from './home'
import BaseFooter from '../base/footer.js'
import LeftArrow from '../../images/left_arrow.svg';

export default class FloorPlan extends React.Component {
    static navigationOptions = {
        title: 'FloorPlan',
    }

    render() {
        const source = require('./floorplan.pdf')
        return (
            <View style={styles.main}>
                <StatusBar backgroundColor="#4872ae" barStyle="light-content" />
                <View style={{ flex: 0.9 }}>
                    <Pdf source={source} style={styles.pdf} />
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
    pdf: {
        flex: 1,
        width: Dimensions.get('window').width,
    }
});
